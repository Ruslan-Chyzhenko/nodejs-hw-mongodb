// src/routers/students.js
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';
// import { getAllContacts, getContactById } from '../services/contacts';
import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper';

const contactsRouter = Router();

// contactsRouter.get('/contacts', async (req, res) => {
//   const contacts = await getAllContacts();

//   res.json({
//     status: 200,
//     message: 'Succefuly get all contacts!',
//     data: contacts,
//   });
// });

// contactsRouter.get('/contacts/:contactId', async (req, res) => {
//   const contactId = req.params.contactId;
//   const contact = await getContactById(contactId);

//   if (!contact) {
//     res.status(404).json({
//       status: 404,
//       message: `Contact with id ${contactId} not found`,
//     });
//     return;
//   }

//   res.status(200).json({
//     status: 200,
//     message: `Succefuly found contact with id ${contactId}`,
//     data: contact,
//   });
// });

// contactsRouter.get('/students', getContactsController);
// contactsRouter.get('/students/:studentId', getContactByIdController);

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
