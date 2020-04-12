var React = require('react');
var Body = require('./body.jsx');
var ReactDOM = require('react-dom');
var axios = require('axios');
class Head extends React.Component {
   
    showbin(){
        document.getElementById('bin').style.display = 'grid';
        axios.get('./rest/bin.php')
        .then(function(response){
            for(let i=0;i<response.data.length;i++){
                let div1 = document.createElement('div');
                let name = document.createElement('span');
                let articul = document.createElement('span');
                name.className = 'namee';
                articul.className = 'articulO';
                name.innerHTML = response.data[i].name;
                articul.innerHTML = response.data[i].articul;
                div1.appendChild(name);
                div1.appendChild(articul);
                document.getElementById('text').appendChild(div1);
                
            }
        })
    }
    render(){
        return(
            <div className="head" >      
                    <div id="number">
                        <span>Казань </span><span>8 800 467 98 32</span>
                    </div>
                    <div id="logo">
                        <img src="img/лого.png" alt=""/>
                    </div>
                    <div id="vedro" onClick={this.showbin}>
                        <span id>корзина</span>
                        <img src="img/basket.png" alt="" id="basket"/>
                    </div>

                    <div class="inline-search">
                        <input type="text" type="search" className="text_search"/>
                        <p className="box-for-search"><input type="image" src="img/search.png" id="lupa"/></p>
                        <div id="namering">
                            <p className="nameHead" id="akts"><a href="#box1">АКЦИИ</a></p>
                            <p className="nameHead" id="novin"><a href="#box2">НОВИНКИ</a></p>
                            <p className="nameHead" id="ring"><a href="#box3">КОЛЬЦА</a></p>
                            <p className="nameHead" id="serg"><a href="#box4">СЕРГИ</a></p>
                            <p className="nameHead" id="podves"><a href="#box5">ПОДВЕСКИ</a></p>
                            <p className="nameHead" id="kulon"><a href="#box6">КОЛЬЕ и КУЛОНЫ</a></p>
                    </div>
                    
                    </div>    


                   
            </div>
        )
    }
}
module.exports = Head; 