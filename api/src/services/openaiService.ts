import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({
    apiKey: apiKey,
});

export async function callGPT(promptContent: string, systemContent: string, previousChat: string): Promise<string> {

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
        content: previousChat || "",
    };

    messages.push(userPrompt);
    messages.push(systemPrompt);
    messages.push(assistantPrompt);

    const createChatCompletion = async () => {
        try {
            const response = await openai.chat.completions.create({
                // model: "gpt-4", // Switch to different models if necessary
                model: "gpt-3.5-turbo",
                messages: messages
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error:", error);
            return "Error creating chat completion";
        }
    };

    const result = await createChatCompletion();
    return result;
}