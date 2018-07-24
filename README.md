# vue3.0 制作的博客
个人vue版的博客网站

#### 主要内容

- 页面懒加载
- 整合vue-bootstrap
- ~~由于是个人项目，所以选择去除eslint(烦死了)~~
- 真香,启用prettier检查代码，配合 yarn lint，使用vscode编码

#### 博客展示图(未完善)
![pc标签页页面的图片](https://github.com/lxs24sxl/readme_add_pic/raw/master/images/vue-blog/tag-pc.png)

![无banner页面的图片](https://github.com/lxs24sxl/readme_add_pic/raw/master/images/vue-blog/photo-pc.png)

![移动端展示的图片](https://github.com/lxs24sxl/readme_add_pic/raw/master/images/vue-blog/index-mobile.png)

![移动端展示的图片2](https://github.com/lxs24sxl/readme_add_pic/raw/master/images/vue-blog/index-mobile.png)

#### 项目构成

<pre>
├── public                     		// index.html和部分静态资源
├── static                   			// 放置静态资源( 公共css js images资源 )
├── src                   				// 生产目录
│   ├── api   	                  // 接口文件夹
│   ├── assert   	            		// 编译资源文件夹
│   ├── components   	            // 公用组件文件夹
│   ├── router                    // 路由配置器文件夹
│   ├── store                     // 仓库(状态)文件夹
│   ├── styles                    // 样式文件夹(用于全局修改 引入的组件样式)
│   ├── utils                    	// 工具类文件夹
│   ├── views                    	// 各个视图
│   ├── App.vue                   // 主页面
│   ├── main.js                   // webpack 预编译入口
├── package.json                  // 项目配置文件
├── vue.config.js                 // webpack配置文件
</pre>