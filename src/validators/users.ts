import { body, param } from 'express-validator';

const createUserValidator = [
  body('name')
    .exists({
      checkFalsy: true,
      checkNull: true,
    })
    .withMessage('Field name is required')
    .isString()
    .withMessage('Field name must be string'),
  body('email')
    .exists({
      checkFalsy: true,
      checkNull: true,
    })
    .withMessage('Field email is required')
    .isEmail()
    .withMessage('Field email must be a valid email'),
];

const findUserByIdValidator = [
  param('id')
    .isUUID()
    .withMessage('Field id must be a valid UUID'),
];

export {
  createUserValidator,
  findUserByIdValidator,
};
