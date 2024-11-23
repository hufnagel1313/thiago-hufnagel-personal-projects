
import { NextFunction, Request, Response } from 'express';
import { MailData } from '../models/MailData';
import { sendEmail } from '../services/mailgunService';


async function sendMail(req: Request, res: Response, next: NextFunction) {
    const mailData = req.body as MailData;
    const result = await sendEmail(mailData.to, mailData.subject, mailData.text, mailData.html);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

const MailController = {
    sendMail,
};

export default MailController;
