1. img中引入图片资源
   直接引入路径是不生效的，可以用**require()**函数这样webpack才会把它当成图片资源来进行处理路径。但是在css文件中背景图片路径可能是**Url()**这个webpack自动处理了
2. antd中布局组件是不支持修改颜色的似乎，组件封闭你只能使用他给你的两个主题色，不要想着去改了
3. 布局
    a 左浮动 b 中间区域 c 右浮动 外面大盒子弹性布局
    c就要写在中间 否则就会被挤到下一行去按照上面的顺序
4. tailwindcss默认引入的基础样式会和antd这种组件库样式发生冲突
   - 将index.css中引入的@tailwind base这句话干掉，但可能会发生一些未知的错误
   - 在tailwind.config.css中配置
      ```js
         corePlugins:{
            preflight:false
         }
      ```
      然后去新建一个preflight.css文件，然后其实就是将之前的文件赋值一遍然后将影响到我们编程的
      给注释掉，比如可能button样式冲突，给他干掉

### Bug
1. 初始登录没有token，但首页仍然有一瞬间的画面