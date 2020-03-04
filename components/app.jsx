var ReactDOM = require('react-dom');
var React = require('react');
var Head = require('./head.jsx');
var Body = require('./body.jsx');
var Bottom = require('./bottom.jsx');
var Kulon = require('./pagekulon.jsx');
var Podveska = require('./pagepodveska.jsx');
var Sergi = require('./pageserg.jsx');
var Ring = require('./pagering.jsx');
var Tovar = require('./tovarWindow.jsx');
var axios = require('axios');


ReactDOM.render(<Head/>,document.getElementById('head'));
ReactDOM.render(<Bottom/>,document.getElementById('bottom'));
ReactDOM.render(<Body/>,document.getElementById('body'));
showbasikpage()



function renderPageRing(dataring){//доп кольца
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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('ringpagebox').appendChild(div);
}


function renderPageSerg(){//доп серги
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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('sergpagebox').appendChild(div);
}


function renderPagePodveska(){//доп подвески
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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('podveskapagebox').appendChild(div);
}


function renderPageKulon(){//отрисовка доп компонентов кулоны
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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('kulonpagebox').appendChild(div);
}
function renderRings(dataring){ //создаю форму для колец
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = dataring.img;
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = dataring.cost;
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    p.onclick = function(){
        
        ReactDOM.render(<Tovar cost = {'цена ' + dataring.cost} img={dataring.img}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('ringbox').appendChild(div);  
}
function renderSergi(datasergi){ //для серег хуита
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = datasergi.img;
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = datasergi.cost;
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    p.onclick = function(){
        ReactDOM.render(<Tovar cost = {'цена' + datasergi.cost}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('serbox').appendChild(div);
}
function renderPodves(datapodves){ //тута подвески хуески вся хуйня
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = datapodves.img;
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = datapodves.cost;
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    p.onclick = function(){
        ReactDOM.render(<Tovar cost = {'цена' + datapodves.cost}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('podvesbox').appendChild(div);
}
function renderKulon(datakulon){ //тут чиляться кулоны ебать их в рот
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = datakulon.img;
    img.className = "ring";
    const ptext = document.createElement('p');
    ptext.innerHTML = datakulon.cost;
    ptext.className = "costp";
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ЗАКАЗАТЬ";
    p.onclick = function(){
        ReactDOM.render(<Tovar cost = {'цена' + datakulon.cost}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('kulonbox').appendChild(div);
}

function showbasikpage(){

    //ReactDOM.render(<Body/>,document.getElementById('body'));

    axios.get('./rest/gold.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderRings(response.data[i]);
        }
    })

    axios.get('./rest/kulon.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderKulon(response.data[i]);
        }
    })

    axios.get('./rest/podves.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderPodves(response.data[i]);
        }
    })

    axios.get('./rest/sergi.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderSergi(response.data[i]);
        }
    })

}