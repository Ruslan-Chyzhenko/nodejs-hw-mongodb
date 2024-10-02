import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Контакт не було видалено.');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
    console.log('Останній контакт було успішно видалено!');
  } catch (error) {
    console.log('Помилка при видалені останього контакту', error);
  }
};

removeLastContact();
