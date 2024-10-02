import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${count} нових контактів було успішно згенеровано!`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};

const count = 5;
generateContacts(count);
