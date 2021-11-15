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
        const validationBody = req.body;
        console.log(req.body);
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
