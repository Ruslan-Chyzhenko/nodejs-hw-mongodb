import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Список контактів вже порожній!');
      return;
    }
    const deleteContacts = [];
    await writeContacts(deleteContacts);
    console.log('Bci контакти були видалено!');
  } catch (error) {
    console.log('Помилка видалення всіх контактів', error);
  }
};

removeAllContacts();
