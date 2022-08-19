---
sidebar_position: 8
---

# 资料库

WFA的资料库建构在[warframe-items](https://github.com/WFCD/warframe-items)项目之上，并借助[灰机Wiki](https://warframe.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5)构建了中文版数据库，你可以使用[词库](https://github.com/Richasy/WFA_Lexicon/tree/WFA5)里的`WF_Lib`中的`uniqueName`作为标识，通过下面的API查询指定的条目资料。

## API前缀

`/wfa/lib`

## 查询条目

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**libQuery**|  GET |   无  | JSON |

### 请求参数

- `language`: 语言选项，可选值有`zh`和`en`
- `item`: 对应`WF_Lib`中的`uniqueName`字段
- `category`: 对应`WF_Lib`中的`type`字段

### 返回结构

视类型不同，返回的数据结构也不一样，请自行请求测试。