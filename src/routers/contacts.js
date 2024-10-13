// src/routers/students.js
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));

contactsRouter.get(
  '/contacts/:contacttId',
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post('/contacts', ctrlWrapper(createContactController));

contactsRouter.delete(
  '/contacts/:contacttId',
  ctrlWrapper(deleteContactController),
);

contactsRouter.put(
  '/contacts/:contacttId',
  ctrlWrapper(upsertContactController),
);

contactsRouter.patch(
  '/contacts/:contacttId',
  ctrlWrapper(patchContactController),
);

export default contactsRouter;
