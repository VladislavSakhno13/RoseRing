var ReactDOM = require('react-dom');
var React = require('react');
var Head = require('./head.jsx');
var Body = require('./body.jsx');
var Bottom = require('./bottom.jsx');
var Kulon = require('./pagekulon.jsx');

ReactDOM.render(<Head/>,document.getElementById('head'));
ReactDOM.render(<Body/>,document.getElementById('body'));
ReactDOM.render(<Bottom/>,document.getElementById('bottom'));


for(let i = 0;i<8;i++){
    renderbox();
    renderSergi();
    renderPodves();
    renderKulon();
}

document.getElementById('kulon').onclick = function(){
    ReactDOM.render(<Kulon/>,document.getElementById('body'));
    for(let j = 0;j<16;j++){
        renderPageKulon();
    }
    
}

document.getElementById('logo').onclick = function(){
    ReactDOM.render(<Body/>,document.getElementById('body'));
    for(let i = 0;i<8;i++){
        renderbox();
        renderSergi();
        renderPodves();
        renderKulon();
    }
    
}


function renderPageKulon(){
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = 'img/kulon.png';
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = "ДОХУЯ";
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('kulonpagebox').appendChild(div);
}
function renderbox(){ //создаю форму для колец
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = 'img/ring.png';
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = "ДОХУЯ";
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('ringbox').appendChild(div);  
}
function renderSergi(){ //для серег хуита
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = 'img/sergi.png';
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = "ДОХУЯ";
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('serbox').appendChild(div);
}
function renderPodves(){ //тута подвески хуески вся хуйня
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = 'img/podveska.png';
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = "ДОХУЯ";
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('podvesbox').appendChild(div);
}
function renderKulon(){ //тут чиляться кулоны ебать их в рот
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = 'img/kulon.png';
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = "ДОХУЯ";
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('kulonbox').appendChild(div);
}