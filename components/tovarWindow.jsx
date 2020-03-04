var React = require('react');
class Tovar extends React.Component {
    
    
    render(){
        return(
            <div id="pageTovar">
                <div className="shopbox">
                    <p className="imgbox"><img src={this.props.img} alt=""/></p>
                </div>
                <div className="shopbox">
                    <div>
                        <span>название</span>
                    </div>
                    <div>
                        <span>артикул</span>
                    </div>
                    <div>
                        <span>{this.props.cost}</span>
                    </div>
                    <div>в корзину</div>
                    <div>характеристики</div>

                    <div><span>примерный вес</span><span></span></div>

                    <div><span>тип металла</span><span></span></div>

                    <div><span>Проба</span><span></span></div>
                    
                    <div><span>Тип вставки</span><span></span></div>

                </div>
            </div>
        )
    }
}
module.exports = Tovar;