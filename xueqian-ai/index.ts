import { generateText, customProvider } from 'ai';
import { createOpenAI, openai } from '@ai-sdk/openai';
import { deepseek, createDeepSeek } from '@ai-sdk/deepseek';
import fs from 'node:fs';
import path from 'node:path';

// const deepseek = createDeepSeek({
//   apiKey: process.env.DEEPSEEK_API_KEY ?? '',
// });

// const model = openai('gpt-4-turbo', {});

async function testOpenai() {
  const res = await generateText({
    model: createOpenAI({
      baseURL: 'https://aigc.sankuai.com/v1/openai/native',
      apiKey: '21902918114338451458',
    })('LongCat-VL-Mini'), // gpt-4o-mini
    // prompt: '生成一张金毛的图片',
    // messages: [
    //   {
    //     role: 'user',
    //     content: [
    //       {
    //         type: 'text',
    //         text: '下面这张图片里面有什么,你可以帮我生成一张类似的图片吗,直接给我图片url即可',
    //       },
    //       {
    //         type: 'image',
    //         mimeType: 'image/jpeg',
    //         image:
    //           'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    //       },
    //     ],
    //   },
    // ],

    // 生成图像
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: '生成一张金毛的图片',
          },
        ],
      },
    ],
  });

  // const res = await generateText({
  //   model: openai('gpt-4o-mini', {
  //     // baseURL: 'https://aigc.sankuai.com/v1/openai/native',
  //     // apiKey: '21899664734253830219',
  //   }),
  //   prompt: 'What is the capital of France?',
  // });

  // const res = await generateText({
  //   model: deepseek('deepseek-chat'),
  //   prompt: 'What is the capital of France?',
  // });

  console.log('testOpenai', res.text);
}
testOpenai();
