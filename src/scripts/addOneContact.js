import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {};

try {
  const contacts = await readContacts();
  const newContacts = createFakeContact();
  const updatedContacts = [...contacts, newContacts];
  await writeContacts(updatedContacts);
  console.log('Новий контакт було успішно додано!');
} catch (error) {
  console.error('Помилка при додаванні контакту:', error);
}

addOneContact();
