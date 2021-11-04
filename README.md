# npm依赖冲突问题

### 同名不同版本号npm包在用一项目中使用：

仓库源码：https://github.com/rayhomie/antdVersionTest

我们以antd作为例子，想在一个项目中同时使用antd3和antd4：（如果要单独使用一个版本的包的话，需要把包单独拿出来）

![依赖包](https://img-blog.csdnimg.cn/8660821dd64541419b08f5d61e87a5cb.png)

此时我们`npm i`安装下依赖，在页面中同时使用antd3和antd4的Form组件进行测试

![测试](https://img-blog.csdnimg.cn/d432d866f2ef4cb6b75a526416e4b86c.png)

引入样式到全局：

![引入全局css](https://img-blog.csdnimg.cn/049016ac6c034003aba9f1b156c2a022.png)

我们看下效果，发现两个版本的Form组件都可以正常使用，但是样式会冲突：

![测试ui](https://img-blog.csdnimg.cn/dedb50a554cf4660890c5670147afe35.png)

下面是ant3和ant4样式冲突导致的效果：

![样式冲突](https://img-blog.csdnimg.cn/963493627ddb4b449ce32a60e5cc6fe6.png)



我们来看看这两个版本包的内部依赖差异对比，可以看到很多都是依赖包都是相同的，但是存在版本号不一致的情况：

![依赖冲突对比](https://img-blog.csdnimg.cn/6d2cd786a60a4ef4bd9e3c39d7ddcc49.png)

我们来看下使用npm install来安装依赖的效果，如果依赖的包版本号一致，则会将依赖包下载到`node_modules`下实现共用；如果发现引用的依赖包版本号不一致，则会将存在版本冲突的依赖包单独下载到`node_modules/module/node_modules`。

![依赖冲突](https://img-blog.csdnimg.cn/2d45036e3c68465ca6b6cc271fe809fb.png)

yarn安装依赖原理和npm不一样，来看下yarn安装的结果：

![yarn安装结果](https://img-blog.csdnimg.cn/4954ed93c56d4115b0263adc3b36ddcf.png)

