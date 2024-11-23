import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';
import { SendMailResult } from '../models/SendMailResult';

dotenv.config();

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

export async function sendEmail(to: string, subject: string, text: string, html: string): Promise<SendMailResult> {

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || apiKey });

    // Email data
    const data = {
        from: `Thiago Hufnagel's Personal Website <mailgun@${domain}>`,
        to: to,
        subject: subject,
        text: text,
        html: "<h1>Testing some Mailgun awesomeness!</h1>"
    };

    // Send the email
    try {
        const msg = await mg.messages.create(domain, data);
        console.log(msg);
        return { success: true, msg } as SendMailResult;
    } catch (err) {
        console.error(err);
        return { success: false, err } as SendMailResult;
    }
}