# 卡片组件库 - 复合组件

复合组件是由多个基础组件组合而成的组件。

## 备注

备注组件由一个图标和一段文字组成，用于在卡片中展示一些提示信息。

### 示例

```json
{
  "id": "block_d91e5ffc",
  "componentName": "Block",
  "alias": "Remark",
  "props": {
    "colSpan": 1,
    "direction": "horizontal",
    "marginTop": 8,
    "marginBottom": 0,
    "marginLeft": 0,
    "marginRight": 0,
    "paddingTop": 10,
    "paddingBottom": 10,
    "paddingLeft": 12,
    "paddingRight": 12,
    "visible": true
  },
  "children": [
    {
      "id": "icon_b84d0d1b",
      "componentName": "Icon",
      "props": {
        "iconType": "icon",
        "icon": "avatar-o",
        "theme": "gray",
        "marginTop": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "marginRight": 0,
        "visible": true
      },
      "children": []
    },
    {
      "id": "block_50fbfdeb",
      "componentName": "Block",
      "props": {
        "colSpan": 1,
        "direction": "vertical",
        "marginTop": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "marginRight": 0,
        "visible": true
      },
      "children": [
        {
          "id": "text_bc07ff22",
          "componentName": "Text",
          "props": {
            "color": "#94989D",
            "type": "plain",
            "content": "文本内容",
            "lineClamp": null,
            "textStyle": {
              "type": "hostConfig",
              "hostConfig": "${textStyle.secondaryText}"
            },
            "visible": true,
            "marginTop": 2,
            "marginBottom": 0,
            "marginLeft": 4,
            "marginRight": 0
          },
          "children": []
        }
      ]
    }
  ]
}
```
