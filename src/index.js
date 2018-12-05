
//1. 导入模块，必须这么写
import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' // 把创建好的组件和虚拟 DOM 放到展示的页面上

// 2. 创建虚拟 DOM 元素
// 参数1：创建元素的类型，字符串表示
// 参数2：是一个对象或者 null，表示当前这个 DOM 元素的属性
// 参数3+：子节点
// const myh1 = React.createElement('h1', {id: 'myh1'}, '这是一个h1标签')
// const myh1 = <h1 id="myh1">主题</h1>

const element = <h1>Hello</h1>

// 3. 使用 ReactDOM 把虚拟 DOM 渲染到页面上 
// 参数1：要渲染的虚拟 DOM
// 参数2：指定页面上的 DOM 元素，当做容器
ReactDOM.render(element, document.getElementById('root'))

function tick() {
    const element = (
        <div>
            <h1>hello</h1>
            <h1>It is{new Date().toLocaleTimeString()}.</h1>
            <p>123123123</p>
        </div>
    )
    ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000);