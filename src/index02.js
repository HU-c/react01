import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*
let h1=<h1>helloworld</h1>
ReactDOM.render(clock(), document.getElementById('root'));
*/


//实现页面中时刻的显示
/*
function clock(){
    //let time=new Date().toString()   //标准时间
    let time=new  Date().toLocaleTimeString()  //简化时间
    let e=(<div>
        <h1>现在的时间是{time}</h1>
        <h1>fack</h1>
    </div>)  //还可以拿括号括起来，代表为一个对象
    ReactDOM.render(e,document.getElementById('root'))
}
clock()
setInterval(clock,1000) //间隔函数，每隔一秒执行一次*/


//组件函数
/*
function Clock(props){
    return (<div>
        <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
        <h1>fack</h1>
    </div>)  //还可以拿括号括起来，代表为一个对象
}
function run(){
    ReactDOM.render(
        <Clock date={new Date()}/>,document.getElementById('root')
    )
}
setInterval(run,1000)*/
