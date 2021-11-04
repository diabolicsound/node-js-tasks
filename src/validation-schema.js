import Joi from 'joi';
import { newUser } from './user.js';

const passwordRegex = /[a-zA-Z0-9]/;

export const validationSchema = Joi.object().keys({
    id: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().regex(passwordRegex).required(),
    age: Joi.number().min(4).max(130).required(),
    isDeleted: Joi.boolean().required()
});

function errorResponse(schemaErrors) {
    const errors = schemaErrors.map((error) => {
        const { path, message } = error;
        return { path, message };
    });
    return {
        status: 'failed',
        errors
    };
}

export function validateSchema(schema) {
    return (req, res, next) => {
        const validationBody = Object.keys(req.params).length ? req.params : newUser;
        const { error } = schema.validate(validationBody, {
            abortEarly: false
        });

        if (error) {
            res.status(400).json(errorResponse(error.details));
        } else {
            return next();
        }
    };
}
