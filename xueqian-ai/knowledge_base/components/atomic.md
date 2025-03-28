# 卡片组件库 - 原子组件

## 卡片根组件

### 组件唯一标识

UniversalCard

### 属性列表

- `title`：卡片标题
  - 类型：`string`
  - 默认值：`''`
  - 必填：否
- `theme`: 标题样式主题，代表标题背景色
  - 类型：`string`
  - 默认值：`'blue'`
  - 必填：否
  - 可选值：`'blue'`、`'green'`、`'red'`、`'yellow'`、`'purple'`
- `titleBgStyle`: 标题样式类型，当需要使用标题栏背景色时需要设置为 color
  - 类型：`string`
  - 默认值：`'default'`
  - 必填：否
  - 可选值：`'default'`、`'color'`

## 按钮

按钮组件用于触发一个操作，如触发请求，打开链接等。

### 组件唯一标识

Button

### 属性列表

- `text`：按钮文本
  - 类型：`string`
  - 默认值：`''`
  - 必填：是
- `styleType`: 按钮样式, ghost 模式按钮展示边框并白色背景，text 模式按钮展示透明背景
  - 类型：`string`
  - 默认值：`'default'`
  - 必填：否
  - 可选值：`'default'`、`'ghost'`、`'text'`
- `marginTop`: 上边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`8`
  - 必填：否
- `marginBottom`: 下边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `marginLeft`: 左边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `marginRight`: 右边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `onClick`: 点击按钮时触发的回调函数协议，使用 `action` 语法
  - 类型：`function`
  - 默认值：`() => {}`
  - 必填：否

### 使用场景

- 需要执行一个操作的时候

### 注意事项

- 按钮的点击事件通过 `onClick` 属性传递，使用 `action` 语法，请参考 [卡片 action 的规范](../syntax/action.md)

## 文本

文本组件用于展示纯文本内容或有一定格式的富文本内容

### 组件唯一标识

Text

### 属性列表

- `content`：文本内容
  - 类型：`string`
  - 默认值：`''`
  - 必填：是
- `type`: 文本类型，支持 `plain` 和 `rich` 两种，当使用 `rich` 模式时支持专有的富文本语法规则
- `marginTop`: 上边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`8`
  - 必填：否
- `marginBottom`: 下边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `marginLeft`: 左边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `marginRight`: 右边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否

### 使用场景

- 需要展示文本内容的时候

### 注意事项

- 富文本语法规则请参考 [富文本语法规则](../syntax/rich-text.md)

## 图标

图标组件用于展示一个图标

### 组件唯一标识

Icon

### 属性列表

- `icon`：图标类型
  - 类型：`string`
  - 默认值：`''`
  - 必填：是
  - 支持列表
    - avatar-o: 头像图标
    - file-o: 文件图标
- `marginTop`: 上边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`8`
  - 必填：否
- `marginBottom`: 下边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `marginLeft`: 左边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
- `marginRight`: 右边距，单位为 px，仅支持 0, 4, 8, 12, 16
  - 类型：`number`
  - 默认值：`0`
  - 必填：否
