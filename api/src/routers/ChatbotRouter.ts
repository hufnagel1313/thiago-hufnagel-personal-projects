import express from 'express';
import chatbotController from '../controllers/ChatbotController';

const router = express.Router();

router.post('/message', chatbotController.handleMessage);

export default router;