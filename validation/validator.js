import { body } from 'express-validator';

export const orderValidator = () => {
  return [
    body('name', 'Make sure the name is entered correctly.').not().isEmpty(),
    body('email', 'Make sure that the email is entered correctly.').isEmail(),
    body('phone', 'Make sure the phone number is entered correctly.').matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/
    ),
    body('address', 'Make sure the address is entered correctly.').not().isEmpty(),
    body('order', 'Make sure the order is not empty.').not().isEmpty(),
  ];
};
