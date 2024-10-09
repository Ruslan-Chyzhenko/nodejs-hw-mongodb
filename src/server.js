// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
// import { getAllContacts, getContactById } from './services/contacts.js';
import contactsRouter from './routers/contacts';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

dotenv.config();

const PORT = Number(process.env.PORT);
export const setupServer = () => {
  const app = express();
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // app.get('/contacts', async (req, res) => {
  //   const contacts = await getAllContacts();

  //   res.json({
  //     status: 200,
  //     message: 'Succefuly get all contacts!',
  //     data: contacts,
  //   });
  // });

  // app.get('/contacts/:contactId', async (req, res) => {
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

  app.use(contactsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
};
