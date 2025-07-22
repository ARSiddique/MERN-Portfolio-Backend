import express from 'express';
import { body } from 'express-validator';
import { sendContact } from '../controllers/contact-controller.js';

const router = express.Router();

router.post(
    '/contact',
    [
        body('name').trim().notEmpty().withMessage('Name is required.'),
        body('email').isEmail().withMessage('Valid email is required.'),
        body('message').trim().notEmpty().withMessage('Message is required.'),
    ],
    sendContact
);

export default router;