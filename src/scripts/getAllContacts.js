import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    console.log('Список контактів:', contacts);

    return contacts;
  } catch (error) {
    console.error('Помилка при читанні контактів:', error);
  }
};

getAllContacts();
