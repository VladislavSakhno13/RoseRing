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
                        <span >название</span>
                    </div>
                    <div className="tovarblock">
                        <span>Артикул:</span>
                    </div>
                    <div className="tovarblock" id="costtovar">
                        <span>{this.props.cost}</span>
                    </div>
                    <div className="tovarblock" id="binbutton">в корзину</div>
                    <div className="tovarblock" id="hatstring"><span>характеристики</span></div>

                    <div className="tovarblock"><span>примерный вес</span><span></span></div>

                    <div className="tovarblock"><span>тип металла</span><span></span></div>

                    <div className="tovarblock"><span>Проба</span><span></span></div>
                    
                    <div className="tovarblock"><span>Тип вставки</span><span></span></div>

                </div>
            </div>
        )
    }
}
module.exports = Tovar;