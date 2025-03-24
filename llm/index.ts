import ai from 'ai';
import { generateText, customProvider } from 'ai';
import { createOpenAI, openai } from '@ai-sdk/openai'; // Ensure OPENAI_API_KEY environment variable is set
import z from 'zod';
import fs from 'node:fs';
import path from 'node:path';

const numberParser = z.number();

const toString = (num: unknown) => {
  const parsed = numberParser.parse(num);
  return String(parsed);
};

console.log('zod', toString(123)); // '123'
// console.log('zod', toString('123')); // '123'

(async () => {
  const { text } = await generateText({
    model: openai('gpt-4o'),
    system: 'You are a friendly assistant!',
    prompt: 'Why is the sky blue?',
  });

  console.log('ai----', text, process.env);
})();

const modelNames = ['deepseek-chat', 'QwQ-32B-Friday', 'qwen-vl-plus-latest', 'gpt-4o-mini'];

const myAIModels = customProvider({
  languageModels: modelNames.reduce((prev, name) => {
    prev[name] = createOpenAI({
      baseURL: 'https://aigc.sankuai.com/v1/openai/native',
      apiKey: process.env.FRIDAY_API_KEY, // your-api-key
    })(name);
    return prev;
  }, {} as any),
});

async function test() {
  const img = fs.readFileSync(path.resolve(__dirname, './card.jpg')).toString('base64');

  const { text } = await generateText({
    model: myAIModels.languageModel('gpt-4o-mini'),
    maxTokens: 1000,
    temperature: 0.6,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'What is in the following image?',
          },
          {
            type: 'image',
            mimeType: 'image/jpeg',
            image: img,
          },
        ],
      },
    ],
  });

  console.log(text);
}

// test();

// $ ts-node index.ts
// The image contains a schedule for a meeting titled "快搭早餐会" (Quick Breakfast Meeting). Here are the key details:

// - **Date and Time**: March 11, 2025, at 10:15 AM (GMT+08:00).
// - **Organizer**: 易东琴 (presumably a person's name).
// - **Frequency**: The meeting occurs bi-weekly, on Tuesdays and Thursdays, or on Mondays and Wednesdays, or on Tuesdays and Fridays.
// - **Content**: The agenda includes project updates and discussions on important issues.
// - There is a link to "查看详情" (View Details) for more information.

// Overall, it appears to be a recurring meeting for updates and discussions.
// ✨  Done in 3.95s.
