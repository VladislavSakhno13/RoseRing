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
ReactDOM.render(<Body/>,document.getElementById('body'));
ReactDOM.render(<Bottom/>,document.getElementById('bottom'));


/*for(let i = 0;i<8;i++){
    renderbox();
    renderSergi();
    renderPodves();
    renderKulon(); 
}*/

axios.get('./rest/gold.php')
    .then(function(response){
        for(let i = 0;i<8;i++){
            renderRings(response.data[0]);
            renderSergi();
            renderPodves();
            renderKulon(); 
        }
    })


document.getElementById('kulon').onclick = function(){//переход к кулонам
   window.scrollBy(0,5400);
}

document.getElementById('logo').onclick = function(){//обратно в началу
    ReactDOM.render(<Body/>,document.getElementById('body'));
    for(let i = 0;i<8;i++){
        renderRings();
        renderSergi();
        renderPodves();
        renderKulon();
        
    }
    
}

document.getElementById('podves').onclick = function(){// переход к подвескам
    window.scrollBy(0,4400)
}

document.getElementById('serg').onclick = function(){// к серьгам
   window.scrollBy(0,3500);

}

document.getElementById('ring').onclick = function(){//к кольцам
    window.scrollBy(0,2350);
    
}


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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
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
    p.onclick = function(){
        ReactDOM.render(<Tovar/>,document.getElementById('body'));
    }
    div.appendChild(img);
    div.appendChild(ptext);
    div.appendChild(p);
    document.getElementById('kulonbox').appendChild(div);
}

/*function getRingData(){
    let dat;
    axios.get('./rest/gold.php')
    .then(function(response){
        this.dat = response.data;
    })
    return dat;
}*/