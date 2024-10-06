// import mongoose from 'mongoose';
// import fs from 'fs';
// import path from 'path';
// import ContactsCollection from '../models/contact.js';
// import { env } from '../utils/env.js';

// const MONGO_URI = env('MONGO_URI', 'mongodb://localhost:27017/contactsdb');

// const importContacts = async () => {
//   try {
//     // Підключення до MongoDB
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected.');

//     // Читання файлу contacts.json
//     const contactsFilePath = path.join(__dirname, '../db/db.json');
//     const contactsData = fs.readFileSync(contactsFilePath, 'utf8');
//     const contacts = JSON.parse(contactsData);

//     // Імпорт контактів у базу
//     await ContactsCollection.insertMany(contacts);
//     console.log('Contacts imported successfully.');

//     // Закриваємо підключення до MongoDB
//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error importing contacts:', error);
//     mongoose.connection.close();
//   }
// };

// importContacts();
