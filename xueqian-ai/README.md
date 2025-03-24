# AI 生成卡片 schema

## 图片 -> 卡片 schema

使用 gpt-4o 多模态模型，识别图片内容，并转成接近的卡片模板。
基于卡片 schema/components 的知识库(目前简单写了部分测试)作为提示词，one-shot 输出 schema json。

![input](./card.jpg)

![output](./output.png)

## 文本需求 -> 卡片 schema
