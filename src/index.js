import React from 'react';
import ReactDOM from 'react-dom';

let time=new Date().toLocaleTimeString()
let e=(
    <div>
        <h1>helloworld</h1>
        <h2>{time}</h2>
    </div>
)
let men='发烧'
let e2=(<div>
    <h1>{
        man=="发热"?'隔离':'安全'
    }</h1>
</div>)

ReactDOM.render(e2,document.getElementById('root')

)