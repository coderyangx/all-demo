# 消息卡片 Schema

## 简介

使用 JSON 格式描述的卡片的 UI 结构和数据。

## 整体结构

使用 JSON definition 定义的卡片 Schema 规范如下：

```json
{
    "type": "object",
    "properties": {
        "schema": {
            "description": "卡片的 schema UI 结构描述",
            "type": "object",
            "properties": {
                "schemaType": {
                    "description": "卡片的类型，支持 CARD_NORMAL/CARD_AI，一般使用 CARD_NORMAL",
                    "type": "string"
                },
                "schemaVersion": {
                    "description": "卡片协议的版本号，代表了兼容性要求，格式为 x.y，当前最高版本为 3.0，兼容性最佳版本为 2.0",
                    "type": "string"
                },
                "pages": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/IDocumentPage"
                    }
                },
                "localList": {
                    "description": "本地变量列表",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/IVariableDef"
                    }
                },
                "varList": {
                    "description": "普通变量列表",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/IVariableDef"
                    }
                }
            },
            "required": [
                "localList",
                "pages",
                "schemaType",
                "schemaVersion",
                "varList"
            ]
        },
        "variables": {
            "description": "卡片的变量值，包括本地变量和普通变量，变量 key 要求与 schema.localList 和 schema.varList 中的 id 一致",
            "$ref": "#/definitions/Record<string,any>"
        }
    },
    "required": [
        "schema",
        "variables"
    ],
    "definitions": {
        "IDocumentPage": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "layout": {
                    "$ref": "#/definitions/ICardComponentSchema"
                }
            },
            "required": [
                "id",
                "layout"
            ]
        },
        "ICardDataSource": {
            "description": "数据源相关类型，包括卡片变量",
            "type": "object",
            "properties": {
                "online": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/IOnlineDataSourceSchema"
                    }
                }
            },
            "required": [
                "online"
            ]
        },
        "IOnlineDataSourceSchema": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [
                        "local",
                        "remote",
                        "uri"
                    ],
                    "type": "string"
                },
                "subType": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "dataType": {
                    "enum": [
                        "avatarList",
                        "bool",
                        "chart",
                        "likeDislikeOptionArray",
                        "number",
                        "numberArray",
                        "object",
                        "objectArray",
                        "optionArray",
                        "recommendOptionArray",
                        "richText",
                        "string",
                        "table"
                    ],
                    "type": "string"
                }
            },
            "required": [
                "dataType",
                "description",
                "name",
                "subType",
                "type"
            ]
        },
        "ICardComponentSchema": {
            "description": "单个组件的 schema 描述",
            "type": "object",
            "properties": {
                "id": {
                    "description": "组件实例的唯一标识，确保全局不重复",
                    "type": "string"
                },
                "componentName": {
                    "description": "组件唯一标识，例如 Button, Text",
                    "type": "string"
                },
                "parentInstanceKey": {
                    "description": "父组件实例的唯一标识",
                    "type": [
                        "null",
                        "string"
                    ]
                },
                "props": {
                    "description": "组件的属性键值对",
                    "$ref": "#/definitions/Record<string,any>"
                },
                "children": {
                    "description": "组件的 children 列表",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/ICardComponentSchema"
                    }
                }
            },
            "required": [
                "children",
                "componentName",
                "id",
                "props"
            ]
        },
        "Record<string,any>": {
            "type": "object"
        },
        "IVariableDef": {
            "type": "object",
            "properties": {
                "id": {
                    "description": "变量的名称",
                    "type": "string"
                },
                "description": {
                    "description": "变量的描述",
                    "type": "string"
                },
                "type": {
                    "description": "变量的类型",
                    "enum": [
                        "avatarList",
                        "bool",
                        "chart",
                        "likeDislikeOptionArray",
                        "number",
                        "numberArray",
                        "object",
                        "objectArray",
                        "optionArray",
                        "recommendOptionArray",
                        "richText",
                        "string",
                        "table"
                    ],
                    "type": "string"
                }
            },
            "required": [
                "description",
                "id",
                "type"
            ]
        }
    },
    "$schema": "http://json-schema.org/draft-07/schema#"
}
```

## 补充细节

### 根组件

卡片的布局根组件必须使用 `UniversalCard`

### 组件的属性值引用变量

组件的属性值可以引用变量，变量的引用方式为 `${变量名称}`，例如：

```json
{
    "id": "button1",
    "componentName": "Button",
    "props": {
        "text": {
            "type": "var",
            "var": "${buttonText}"
        }
    }
}
```
