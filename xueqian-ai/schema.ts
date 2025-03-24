import { generateText } from "ai";
import fs from "node:fs";
import path from "node:path";
import { getModel } from "./shared";

const prepareKnowledgeBase = () => {
  const list = [
    {
      file: "./components/atomic.md",
      content: "",
    },
    {
      file: "./components/composite.md",
      content: "",
    },
    {
      file: "./schema/index.md",
      content: "",
    },
    {
      file: "./syntax/rich-text.md",
      content: "",
    },
    {
        file: "./syntax/action.md",
        content: "",
      },
  ];

  return list.map(({ file }) => {
    return {
      file,
      content: fs.readFileSync(path.resolve(__dirname, 'knowledge_base', file)).toString(),
    };
  });
};

const generateSystemPrompt = () => {
    const knowledgeBase = prepareKnowledgeBase();
    
    return `
## Role
A specialist in nocode schema generation.

## Tasks
- Generate nocode message card schema based on the provided image of a UI mockup or design.

## Format
Please follow the knowledge base below when generating the schema:

${knowledgeBase.map(({ file, content }) => `---\nfile: ${file}---\n\n${content}`).join("\n")}

## Requirements
- Visual Fidelity and Layout Replication
  - Layout Structure: Accurately reproduce the overall layout structure seen in the image
  - Component Recognition and Implementation: Identify UI components in the image and map them to the appropriate components in the schema
  - Styling Replication: Accurately reproduce the styling of the components in the schema by selecting the appropriate props
`;
}

async function test() {
  const img = fs
    .readFileSync(path.resolve(__dirname, "./card.jpg"))
    .toString("base64");

  const { text, ...rest } = await generateText({
    model: getModel("gpt-4o-mini"),
    maxTokens: 1000,
    temperature: 0.6,
    messages: [
      {
        role: "system",
        content: generateSystemPrompt(),
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Generate a card schema for the following image",
          },
          {
            type: "image",
            mimeType: "image/jpeg",
            image: img,
          },
        ],
      },
    ],
  });

  console.log(JSON.stringify(rest, null, 2));

  fs.writeFileSync("./schema.json", text);
}

test();

// "usage": {
//     "promptTokens": 27922,
//     "completionTokens": 762,
//     "totalTokens": 28684
// }
