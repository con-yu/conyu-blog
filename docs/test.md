## 访问页面中的参数

```vue
<script setup>
import { useData } from 'vitepress'

// params is a Vue ref
const { params } = useData()

console.log(params.value)
</script>
```

<script setup>
  import { useData } from 'vitepress'

// params is a Vue ref
const all = useData()

console.log(all)
</script>


## 表格
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## emoji
:tada: :100: 
🙃

## 目录列表
[[toc]] 

## 自定义容器

### 默认标题
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义标题
> 在类型标题右边书写自定义标题
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## 代码高亮
> 可指定单行或多行
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

## 代码块色块差异
在一行上添加 // [!code --] or // [!code ++] 注释将创建该行的差异，同时保留代码块的颜色。
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码显示行号
可通过config.ts全局配置是否显示代码行号
```ts
export default {
  markdown: {
    lineNumbers: true
  }
}
```
也可以手动指定:line-numbers 或 :no-line-numbers


## 代码组
对多个代码进行分栏显示
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

