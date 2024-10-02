import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при читанні контакту ${PATH_DB}:', error);
    return [];
  }
};
