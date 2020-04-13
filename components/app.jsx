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
showbasikpage();

axios.delete('./rest/bin.php')
.then(function(response){
    
})
document.getElementById('logo').onclick = function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('body'));
        ReactDOM.render(<Body/>,document.getElementById('body'));
        showbasikpage();

}

function renderPageRing(dataring){//доп кольца
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
        ReactDOM.render(<Tovar cost = {dataring.cost} img={dataring.img} articul={dataring.weight} name={dataring.name}
        n1 = {dataring.ves} n2 = {dataring.metal} n3 = {dataring.sample} n4 = {dataring.type}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('ringpagebox').appendChild(div);
}


function renderPageSerg(datasergi){//доп серги
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
        ReactDOM.render(<Tovar cost = {datasergi.cost} img={datasergi.img} articul={datasergi.weight} name={datasergi.name}
            n1 = {datasergi.ves} n2 = {datasergi.metal} n3 = {datasergi.sample} n4 = {datasergi.type}/>,document.getElementById('body'));
            window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('sergpagebox').appendChild(div);
}


function renderPagePodveska(datapodves){//доп подвески
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
        ReactDOM.render(<Tovar cost = {datapodves.cost} img={datapodves.img} articul={datapodves.weight} name={datapodves.name}
            n1 = {datapodves.ves} n2 = {datapodves.metal} n3 = {datapodves.sample} n4 = {datapodves.type}/>,document.getElementById('body'));
            window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('podveskapagebox').appendChild(div);
}


function renderPageKulon(datakulon){//отрисовка доп компонентов кулоны
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
        ReactDOM.render(<Tovar cost = {datakulon.cost} img={datakulon.img} articul={datakulon.weight} name={datakulon.name}
            n1 = {datakulon.ves} n2 = {datakulon.metal} n3 = {datakulon.sample} n4 = {datakulon.type}/>,document.getElementById('body'));
            window.scrollBy(0,-10000);
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
        ReactDOM.render(<Tovar cost = {dataring.cost} img={dataring.img} articul={dataring.weight} name={dataring.name}
        n1 = {dataring.ves} n2 = {dataring.metal} n3 = {dataring.sample} n4 = {dataring.type}/>,document.getElementById('body'));
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
        ReactDOM.render(<Tovar cost = {datasergi.cost} img={datasergi.img} articul={datasergi.weight} name={datasergi.name}
            n1 = {datasergi.ves} n2 = {datasergi.metal} n3 = {datasergi.sample} n4 = {datasergi.type}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('serbox').appendChild(div);
}
function renderPodves(datapodves){ //тута подвески 
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
        ReactDOM.render(<Tovar cost = {datapodves.cost} img={datapodves.img} articul={datapodves.weight} name={datapodves.name}
            n1 = {datapodves.ves} n2 = {datapodves.metal} n3 = {datapodves.sample} n4 = {datapodves.type}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('podvesbox').appendChild(div);
}
function renderKulon(datakulon){ //тут чиляться кулоны 
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
        ReactDOM.render(<Tovar cost = {datakulon.cost} img={datakulon.img} articul={datakulon.weight} name={datakulon.name}
            n1 = {datakulon.ves} n2 = {datakulon.metal} n3 = {datakulon.sample} n4 = {datakulon.type}/>,document.getElementById('body'));
        window.scrollBy(0,-10000);
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('kulonbox').appendChild(div);
}
document.getElementById('m1').onclick = function(){//кольца
    ReactDOM.render(<Ring/>,document.getElementById('body'));
    axios.get('./rest/gold.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderPageRing(response.data[i]);
        }
    })
}
document.getElementById('m2').onclick = function(){//серьги
    ReactDOM.render(<Sergi/>,document.getElementById('body'));
    axios.get('./rest/sergi.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderPageSerg(response.data[i]);
        }
    })
}
document.getElementById('m4').onclick = function(){//кулон
    ReactDOM.render(<Kulon/>,document.getElementById('body'));
    axios.get('./rest/kulon.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderPageKulon(response.data[i]);
        }
    })
}
document.getElementById('m3').onclick = function(){//подвески
    ReactDOM.render(<Podveska/>,document.getElementById('body'));
    axios.get('./rest/podves.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderPagePodveska(response.data[i]);
        }
    })
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