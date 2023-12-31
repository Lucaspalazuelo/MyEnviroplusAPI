import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: 'Invalid request body',
            error: error.errors,
        });
    }
}

export default validateResource;
