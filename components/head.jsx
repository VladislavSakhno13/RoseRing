var React = require('react');
class Head extends React.Component {
    render(){
        return(
            <div className="head" >      
                    <div id="number">
                        <span>Казань </span><span>8 800 467 98 32</span>
                    </div>
                    <div id="logo">
                        <img src="img/лого.png" alt=""/>
                    </div>
                    <div id="vedro">
                        <span>корзина</span>
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