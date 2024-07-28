import Joi from "joi";

const userValidator =
    Joi.object({
        username: Joi.string()
            .pattern(/^[a-zA-Z]\w{1,19}$/)
            .min(1)
            .max(20)
            .messages({
                "string.pattern.base": "username doesn't match with the rules",
                "string.min": "username must be at least one character",
                "string.max": "username must be max 20",
            }),
        password: Joi.string()
            .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
            .min(1)
            .max(128)
            .messages({
                "string.pattern.base": "password doesn't match with the rules",
                "string.min": "username must be at least one character",
                "string.max": "username must be max 128",
            })
    })
export default userValidator;