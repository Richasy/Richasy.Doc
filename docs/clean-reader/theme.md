---
sidebar_position: 2
---

# 主题配置

主题配置文件是书库目录下的 `theme.json` 文件。该文件使用 JSON 进行配置，是一个由多个独立的主题项组合成的主题数组。

## 单个主题项配置

一个默认的主题单元由以下元素组成：

```json
{
    // 主题名称，是唯一标识符，不能与数组内其它单元重名
    "name": "theme name",
    // 字体大小
    "fontSize": 20,
    // 字体名称
    "fontFamily": "Segoe UI Variable Display",
    // 行高
    "lineHeight": 1.8,
    // 阅读界面的背景色，目前仅支持纯色
    "background": "#F7F7F7",
    // 阅读界面的前景色，也就是文本颜色
    "foreground": "#161616",
    // 一段 JSON 风格的 CSS 文本，用于精细化设置
    "additionalStyle": "{\"a\": {\"color\":\"#1fd6ee !important\"}}"
}
```

## 附加样式

干净阅读的阅读器建立在 WebView2 的基础上，使用 Epub.js 作为渲染框架，所以它也支持 CSS 注入。

你可以在你喜欢的编辑器中使用 JSON 转换你的 CSS 样式（上面的样例中修改了超链接的文本颜色），然后再将转换的 JSON 对象再转换为 JSON 字符串写在主题项配置中以进行更丰富的样式自定义。

:::tip
有些 EPUB 文件自带样式，如果你需要你的自定义样式优先级更高，则需要标明 `!important`，这和 CSS 中的规则一样。
:::

:::warning
阅读器在初始化时已经对标签 `body`, `p` 进行了自定义（使用配置项中的 `fontSize` 等属性），如果你的附加样式中涉及到了这些标签，则你的附加样式会覆盖主题单元内的设置
:::