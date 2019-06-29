#### 本模块第一个测试vue的keep-alive组件

1. keep-alive是vue提供的一个原生组件，用于缓存我们自定义的组件
2. 作用是缓存我们自定义组件的状态，也就是数据
3. 只会保持组件状态数据，不会保持页面滑动xy位置

#### 本模块第二个测试vue-router的scrollBehavior

1. scrollBehavior作用是在切换路由的时候可以设置页面滚动位置
2. 在vue-router中，切换路由会导致页面的位置保持
3. 比如在A页面Y轴滑动了100px，切换到B路由此时依然Y轴会保留100px
4. scrollBehavior是一个回调函数接受3个参数
5. 参数to路由对象
6. from路由对象
7. savedPosition，点击浏览器的前进后退按钮触发
8. 此功能只在支持history.pushState的浏览器才有效果