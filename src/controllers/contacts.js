// src/controllers/contacts.js
import {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { env } from '../utils/env.js';

const processPhoto = async (photo) => {
  if (photo) {
    return env('ENABLE_CLOUDINARY') === 'true'
      ? await saveFileToCloudinary(photo)
      : await saveFileToUploadDir(photo);
  }
  return null;
};

export const getContactsController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const userId = req.user._id;
  try {
    const contacts = await getAllContacts({
      page,
      perPage,
      sortBy,
      sortOrder,
      filter,
      userId,
    });
    res.json({
      status: 200,
      message: 'Succefuly get all contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactByIdController = async (req, res, next) => {
  const contactId = req.params.contactId;
  const userId = req.user._id.toString();
  const contact = await getContactById(userId, contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Succefuly found contact with id ${contactId}`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const userId = req.user._id;
  const photoUrl = await processPhoto(req.file);

  const contact = await createContact({ ...req.body, userId, photo: photoUrl });

  res.status(201).json({
    status: 201,
    message: `Successfully created a contact!`,
    data: contact,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const userId = req.user._id.toString();

  const contact = await deleteContact(userId, contactId);

  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.status(204).send();
};

export const upsertContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const userId = req.user._id.toString();
  const photoUrl = await processPhoto(req.file);

  const result = await updateContact(
    userId,
    contactId,
    { ...req.body, photo: photoUrl },
    {
      upsert: true,
    },
  );

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a contact!`,
    data: result,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const userId = req.user._id.toString();
  const photoUrl = await processPhoto(req.file);

  const contact = await updateContact(userId, contactId, {
    ...req.body,
    photo: photoUrl,
  });

  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: contact,
  });
};
