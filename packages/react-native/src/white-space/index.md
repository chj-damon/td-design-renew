---
title: WhiteSpace - 水平留白组件
nav:
  title: RN 组件
  path: /react-native
group:
  title: Basic
  path: /basic
---

# WhiteSpace 水平留白组件

## 效果演示

### 1. 默认效果

```tsx | pure
<View style={{ height: 50, backgroundColor: 'red' }} />
<WhiteSpace />
<View style={{ height: 50, backgroundColor: 'gold' }} />
```

<center>
  <figure>
    <img
      alt="whiteSpace-ios1.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607483947000193494.png"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
  </figure>
</center>

### 2. 指定 backgroundColor 和 size

```tsx | pure
<View style={{ height: 50, backgroundColor: 'red' }} />
<WhiteSpace size="x6" backgroundColor="green" />
<View style={{ height: 50, backgroundColor: 'gold' }} />
```

<center>
  <figure>
    <img
      alt="whiteSpace-ios2.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607484882581015487.png"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
  </figure>
</center>

## API

| 属性            | 必填    | 说明             | 类型                                                | 默认值        |
| --------------- | ------- | ---------------- | --------------------------------------------------- | ------------- |
| size            | `false` | 水平留白的大小   | `xxs` \| `xs` \| `s` \| `m` \| `l` \| `xl` \| `xxl` | `m`           |
| backgroundColor | `false` | 水平留白的背景色 | `string`                                            | `transparent` |

_`size`的值对应的具体大小定义在`theme`文件的`spacing`。_
