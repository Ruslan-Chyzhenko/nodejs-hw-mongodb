import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`Загальна кількість контактів: ${count}`);
    return count;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
  }
};

countContacts();
