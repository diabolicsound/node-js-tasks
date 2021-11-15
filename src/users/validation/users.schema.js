import Joi from 'joi';

const passwordRegex = /[a-zA-Z0-9]/;

export const userValidationSchema = Joi.object().keys({
    id: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().regex(passwordRegex).required(),
    age: Joi.number().min(4).max(130).required(),
    isDeleted: Joi.boolean().required()
});
