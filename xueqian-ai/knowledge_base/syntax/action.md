# Action 语法

Action 是一个用于描述一个动作的语法。Action 语法是一个 JSON 对象。

注意：module/type 字段是必须的

一些示例如下：

## 打开链接

```json
{
    "actions": [
        {
            "type": "openUrl",
            "params": {
                "urlType": "unify",
                "url": "https://example.com"
            },
            "module": "platform"
        }
    ],
    "module": "platform",
    "type": "Function"
}
```

### 发送请求

```json
{
    "module": "platform",
    "type": "Function",
    "actions": [
        {
            "type": "request",
            "module": "platform",
            "params": {
                "data": {
                    "foo": "bar"
                },
                "openSuccessToast": false,
                "resetMode": "default"
            }
        }
    ]
}
```
