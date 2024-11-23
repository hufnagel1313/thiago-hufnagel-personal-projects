import express from 'express';
import MailController from '../controllers/MailController';

const router = express.Router();

router.post('/send', MailController.sendMail);

export default router;