import OpenAI from "openai";

export const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY, // This is the default and can be omitted
});