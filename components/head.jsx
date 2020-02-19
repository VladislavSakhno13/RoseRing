var React = require('react');
class Head extends React.Component {
    render(){
        return(
            <div className="head" >      
                    <div id="number">
                        <span>Казань </span><span>8 800 467 98 32</span>
                    </div>
                    <div>
                        <img src="img/лого.png" alt="" id="logo"/>
                    </div>
                    <div id="vedro">
                        <span>корзина</span>
                        <img src="img/basket.png" alt="" id="basket"/>
                    </div>
                    <div>
                        <img src="img/search.png" alt="" id="lupa"/>
                        <input type="text"/>
                    </div>
                    <div>
                        <p className="nameHead">АКЦИИ</p>
                        <p className="nameHead">НОВИНКИ</p>
                        <p className="nameHead">КОЛЬЦА</p>
                        <p className="nameHead">СЕРЬГИ</p>
                        <p className="nameHead">ПОДВЕСКА</p>
                        <p className="nameHead">КОЛЬЕ И КУЛОНЫ</p>
                    </div>
            </div>
        )
    }
}
module.exports = Head; 