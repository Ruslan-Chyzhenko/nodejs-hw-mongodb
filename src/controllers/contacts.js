// src/controllers/contacts.js
import { getAllContacts, getContactById } from '../services/contacts';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
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
  const contact = await getContactById(contactId);

  //   if (!contact) {
  //     res.status(404).json({
  //       status: 404,
  //       message: `Contact with id ${contactId} not found`,
  //     });
  //     return;
  //   }

  if (!contact) {
    // next(new Error('Contact not found'));
    // return;
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json({
    status: 200,
    message: `Succefuly found contact with id ${contactId}`,
    data: contact,
  });
};
