import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({
    apiKey: apiKey,
});

async function callGPT(promptContent: any, systemContent: any, previousChat: any) {

    const messages: ChatCompletionMessageParam[] = [];

    const userPrompt: ChatCompletionMessageParam = {
        role: "user",
        content: promptContent,
    };

    const systemPrompt: ChatCompletionMessageParam = {
        role: "system",
        content: systemContent,
    };

    const assistantPrompt: ChatCompletionMessageParam = {
        role: "assistant",
        content: previousChat,
    };

    messages.push(userPrompt);
    messages.push(systemPrompt);
    messages.push(assistantPrompt);

    const createChatCompletion = async () => {
        try {
            const response = await openai.chat.completions.create({
                // model: "gpt-4", // Switch to different models if necessary
                model: "gpt-3.5-turbo-0125",
                messages: messages
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error:", error);
            console.error('Error creating chat completion:', error);
            return "Error creating chat completion";
        }
    };

    const result = await createChatCompletion();
    return result;
}

module.exports = { callGPT };