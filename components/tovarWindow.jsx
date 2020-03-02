var React = require('react');
class Tovar extends React.Component {
    
    
    render(){
        return(
            <div id="pageTovar">
                <div className="shopbox">
                    <p className="imgbox"></p>
                </div>
                <div className="shopbox">
                    <div>
                        <span>{this.props.cost}</span>
                    </div>
                    <div>
                        <span>артикул</span>
                    </div>
                    <div>
                        <span>цена</span>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Tovar;