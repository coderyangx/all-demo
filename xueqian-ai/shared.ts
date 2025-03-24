import { generateText, customProvider } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const modelNames = ['deepseek-chat', 'QwQ-32B-Friday', 'qwen-vl-plus-latest', 'gpt-4o-mini']

const myAIModels = customProvider({
  languageModels: modelNames.reduce((prev, name) => {
    prev[name] = createOpenAI({
      baseURL: 'https://aigc.sankuai.com/v1/openai/native',
      apiKey: '21899664734253830219', // your-api-key
    })(name);
    return prev;
  }, {} as any)
});

export function getModel(name: string) {
  return myAIModels.languageModel(name);
}