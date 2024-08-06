# 包管理工具
## 一、概念的介绍
### 1.1 包是什么
『包』英文单词是 package ，代表了一组特定功能的源码集合
### 1.2 包管理工具
- 管理『包』的应用软件，可以对「包」进行 下载安装 ， 更新 ， 删除 ， 上传 等操作。
- 借助包管理工具，可以快速开发项目，提升开发效率。
- 包管理工具是一个通用的概念，很多编程语言都有包管理工具，所以 掌握好包管理工具非常重要。
### 1.3 常用的包管理工具
下面列举了前端常用的包管理工具
- npm
- yarn
- cnpm
## 二、npm
npm 全称 Node Package Manager ，翻译为中文意思是『Node 的包管理工具』
npm 是 node.js 官方内置的包管理工具，是 必须要掌握住的工具
### 2.1 npm的安装
node.js 在安装时会 自动安装 npm ，所以如果你已经安装了 node.js，可以直接使用 npm
可以通过 npm -v 查看版本号测试，如果显示版本号说明安装成功，反之安装失败
### 2.2 npm基本使用
**2.2.1 初始化**

创建一个空目录，然后以此目录作为工作目录 启动命令行工具 ，执行 npm init
npm init 命令的作用是将文件夹初始化为一个『包』， 交互式创建 package.json 文件
package.json 是包的配置文件，每个包都必须要有 package.json
package.json 内容示例
```json
{
  "name": "01_npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
属性翻译
```json
{
  "name": "1-npm",    #包的名字
  "version": "1.0.0", #包的版本
  "description": "",  #包的描述
  "main": "index.js", #包的入口文件
  "scripts": {        #脚本配置
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",       #作者
  "license": "ISC"    #开源证书
}
```
> **初始化的过程中还有一些注意事项：**
> 1. package name ( 包名 ) 不能使用中文、大写，默认值是 文件夹的名称 ，所以文件夹名称也不
能使用中文和大写
> 2. version ( 版本号 )要求 x.x.x 的形式定义， x 必须是数字，默认值是 1.0.0
> 3. ISC 证书与 MIT 证书功能上是相同的，关于开源证书扩展阅读http://www.ruanyifeng.com/bl
og/2011/05/how_to_choose_free_software_licenses.html
> 4. package.json 可以手动创建与修改
> 5. 使用 npm init -y 或者 npm init --yes 极速创建 package.json

**2.2.2 搜索包**

搜索包的方式有两种
1. 命令行 『npm s/search 关键字』
2. 网站搜索 网址是 https://www.npmjs.com/

**2.2.3 下载安装包**
通过 npm install 和 npm i 命令安装包
```shell
# 格式
npm install <包名>
npm i <包名>
# 示例
npm install uniq
npm i uniq
```
运行之后文件夹下会增加两个资源
1. node_modules 文件夹 存放下载的包
2. package-lock.json 包的锁文件 ，用来锁定包的版本
> 安装 uniq 之后， uniq 就是当前这个包的一个 依赖包 ，有时会简称为 依赖
>
> 比如我们创建一个包名字为 A，A 中安装了包名字是 B，我们就说 B 是 A 的一个依赖包 ，也会说
A 依赖 B
**2.2.4 require 导入 npm 包基本流程**
1. 在当前文件夹下 node_modules 中寻找同名的文件夹
2. 在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录
### 2.3 生产环境与开发环境

开发环境是程序员 专门用来写代码 的环境，一般是指程序员的电脑，开发环境的项目一般 只能程序员自
己访问

生产环境是项目 代码正式运行 的环境，一般是指正式的服务器电脑，生产环境的项目一般 每个客户都可
以访问

### 2.4 生产依赖与开发依赖
我们可以在安装时设置选项来区分 依赖的类型 ，目前分为两类：

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
<!-- <table>
  <thead>
    <tr>
      <th>类型</th>
      <th>命令</th>
      <th>补充</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color: red">test</td>
      <td>test</td>
      <td>test</td>
    </tr>
    <tr>
      <td>test</td>
      <td>test</td>
      <td>test</td>
    </tr>
  </tbody>
</table> -->


| 类型 | 命令 | 补充 |
| -----|-----|------|
| 生产依赖 | npm i -S uniq </br> npm i --save uniq | -S 等效于 --save，</br> -S 是默认选项包信息保存在 package.json 中 dependencies 属性 |
| 开发依赖 | npm i -D less </br> npm i --save-dev less | -D 等效于 --save-dev </br> 包信息保存在 package.json 中 devDependencies 属性 |


