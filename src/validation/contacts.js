// src/validation/contacts.js

import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().required().messages({
    'any.required': 'Phone Number is required',
  }),
  email: Joi.string().email(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({ 'any.required': 'Contact Type is required' }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional,
  phoneNumber: Joi.string().optional,
  email: Joi.string().email().optional,
  isFavorite: Joi.boolean().optional,
  contactType: Joi.string().valid('work', 'home', 'personal').optional,
}).min(1);

// export const createContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required(),
//   email: Joi.string().email().required(),
//   age: Joi.number().integer().min(6).max(16).required(),
//   gender: Joi.string().valid('male', 'female', 'other').required(),
//   avgMark: Joi.number().min(2).max(12).required(),
//   onDuty: Joi.boolean(),
// });

// export const updateContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20),
//   email: Joi.string().email(),
//   age: Joi.number().integer().min(6).max(16),
//   gender: Joi.string().valid('male', 'female', 'other'),
//   avgMark: Joi.number().min(2).max(12),
//   onDuty: Joi.boolean(),
// });

// const dataToValidate = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   age: 12,
//   gender: 'male',
//   avgMark: 10.2,
// };

// const validationResult = createContactSchema.validate(dataToValidate);
// if (validationResult.error) {
//   console.error(validationResult.error.message);
// } else {
//   console.log('Data is valid!');
// }

// const validationResult = createContactSchema.validate(userData, {
//   abortEarly: false,
// });
