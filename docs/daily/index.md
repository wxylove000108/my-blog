## 安装 unocss

```js
pnpm i -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

### 在 vite.config.ts 中使用

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 引入Unocss
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      // 使用Unocss
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
});
```

### 在 main.ts 中引入 unocss

```ts
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 导入Unocss
import "uno.css";
createApp(App).mount("#app");
```

### 代码中具体使用

```html
<template>
  <div class="text-25px text-#ff6700 bg-#ccc">你好Unocss</div>
</template>
```

### 图标库的具体使用

[图标库](https://icones.js.org/),
你可以在里面看到大量的图标

### 安装图标库
```ts
pnpm i -D @iconify-json/logos
```

### 找到你喜欢的图标
#### 例如
![图片alt](https://img-blog.csdnimg.cn/img_convert/c4166a1570a661cd824533669c6c2b82.jpeg "图标")

### 选中你需要的图标,然后选中Unocss查看对应的class类名
![图片alt](https://img-blog.csdnimg.cn/img_convert/0e0ab91a451c74462805f868e0795f8d.jpeg "示例图片")

### 代码中使用
```html
<template>
  <div class="i-logos-atomic-icon w-50px h-50px"></div>
</template>
```

### Unocss 也可以增加一些预设css配置
#### 在vite.config.ts增加 rules 规则
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ],
      rules: [ // 在这个可以增加预设规则, 也可以使用正则表达式
        [

          'p-c', // 使用时只需要写 p-c 即可应用该组样式
          {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`
          }
        ],
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
      ]
    })
  ]
})
```

### 文档地址
[Github](https://github.com/unocss/unocss)

### vscode 插件选择-提供代码智能提示

```ts
Unocss
```
