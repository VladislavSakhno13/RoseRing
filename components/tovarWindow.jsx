var React = require('react');
class Tovar extends React.Component {
    
    
    render(){
        return(
            <div id="pageTovar">
                <div className="shopbox">
                    <p className="imgbox"><img src={this.props.img} alt=""/></p>
                </div>
                <div className="shopbox2">
                    <div id="name">
                        <span >{this.props.name}</span>
                    </div>
                    <div className="tovarblock">
                        <span id="articul">Артикул:</span><span>{" " + this.props.articul}</span>
                    </div>
                    <div className="tovarblock" id="costtovar">
                        <span>{this.props.cost}</span>
                    </div>
                    <div className="tovarblock" id="binbutton">в корзину</div>
                    <div className="tovarblock" id="hatstring"><span>характеристики</span></div>

        <           div className="tovarblock"><span>примерный вес</span><span>{" " + this.props.n1}</span></div>

                    <div className="tovarblock"><span>тип металла</span><span>{" "+this.props.n2}</span></div>

                    <div className="tovarblock"><span>Проба</span><span>{" " + this.props.n3}</span></div>
                    
                    <div className="tovarblock"><span>Тип вставки</span><span>{" "+this.props.n4}</span></div>

                </div>
            </div>
        )
    }
}
module.exports = Tovar;