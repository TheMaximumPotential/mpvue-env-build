# mp_init

#### 介绍
{**以下是码云平台说明，您可以替换此简介**
码云是 OSCHINA 推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用码云实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### 安装教程

1. xxxx
2. xxxx
3. xxxx

#### 使用说明

1. xxxx
2. xxxx
3. xxxx

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

#### 说明文档
1. 文件夹结构

```
   ├── build                    # webpack构建 等配置
   ├── config                   # 生产、开发环境 等配置
   ├── dist                     # 打包完成的静态文件
   ├── static
   │   ├── iView                # 一整套iview weapp的ui
   │   └── images               # 本地图片所存放的位置
   ├── src
   │   ├── common               # 本地静态资源
   │   ├── components           # 业务通用组件
   │   ├── pages                # 业务页面入口
   │   ├── router               # 路由配置入口
   │   ├── http               	# 网络请求相关
   │   ├── store                # vuex 状态管理仓库
   │   ├── utils                # 工具库
   │   ├── app.json             # 小程序全局配置
   │   └── app.vue              # 项目入口文件
   ├── README.md
   ├── package.json             # 项目配置文件
   ├── project.config.json      # 小程序项目配置文件
   └── package.swan.json        # 小程序项目配置文件
```

 2. src文件夹详情
     1. common 文件夹为公共静态文件存放地址，一般common文件夹下又会建一个js文件夹和一个css文件夹，js文件夹中存放一些全局通用的变量，css文件夹中存放全局的scss变量、方法、全局样式配置等通用scss文件（此项目已为全局配置scss引入时只需要在style标后加上lang="scss"即可使用scss语法）
     2. components 文件夹下存放通用组件，可从项目中抽象出一些公用的样式方法做成组件，用来提高代码的复用性
     3. http （此项目中用flyio作为请求工具并进行了二次封装）文件夹下config文件用来配置flyio可配置项具体可查看flyio的官方文档，api文件存放着所有接口并导出，使用时导入即可（强调这个工具的请求拦截器interceptors.request和相应拦截器interceptors.response的作用很重要，最常用在请求拦截器中集中判断token有无，有则请求继续，无则跳转到相应页面去获取token，在响应拦截器中最常用的是对返回码的集中判断，并对其做相应的提示）
     4. pages 文件夹为所有页面相关的文件存放的地址，一个页面需加一个文件夹，而加的每个文件夹下只需要建一个index.vue文件作为页面的入口文件（由于全局配置了mpvue-entry（集中式页面配置插件）所以可以不用在每个文件夹下都写main.js与app.json这样这样重复的代码，直接在router/index.js中配置每个页面的app.json）
     5. router 文件夹下只有一个index.js文件，此文件中可修改每个页面的配置（可修改的配置详情可见小程序官方文档）在此配置的路由必须先在同级目录下的app.json中的pages页面数组中注册页面，注册过后在此配置页面才会生效
     6. store 文件夹下是一整套vuex（全局状态管理仓库）的标准化文件夹的构建结构，用法请见vue的官方文档中vuex的说明文档（一般哪些地方会用到vuex：全局token、userId、openId等许多页面都需要用到的值存放在store中，比起各种复杂的组件间，页面间传值代价要小很多）
     7. utils 文件夹下index.js文件中主要存放了常用的工具类函数，比如时间戳转时间函数等
     8. app.json 文件中配置和小程序全局配置一样，主要配置一些小程序显示方面的的配置
     9. App.vue 文件是小程序的入口文件，在此文件中一般会处理一些小程序刚进小程序需要做的判断操作，在小程序自带的生命周期或者mpvue的生命周期中做处理，最常用的是小程序自带的onLaunch函数和onShow函数，onLaunch函数是小程序第一次加载的时候，在这个函数中一般会用来判断用户有没有注册过，或者登陆有没有过期，没有的话直接重定向到登录页让用户登录注册，onShow函数的用处也差不多，是每次小程序从后台调起时执行的函数，这个函数最常用来更新某些信息，让用户每次调起小程序都能看到最新的数据
     10. main.js 文件为把要用的方法集中挂载到全局的vue实例（要挂载的东西都已经配置好，这个文件一般不需要改动）
   
3. 项目开始
    1. 修改project.config.json以及package.swan.json中appid配置为微信公众平台对应的appid
    2. 在src文件夹下的pages文件夹中创建页面文件
    3. 在app.json中的pages页面数组中配置页面有关的信息
    4. 然后再router文件夹中的index文件中配置此页面的相关信息（如需引入iview组件，请按照小程序components的引入方式和iview Weapp 的官网方式引入进行使用）
    5. scss为css扩展语言，用最基本的语法非常容易上手，在style标签后加上lang="scss"即可使用scss语法

