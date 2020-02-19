var React = require('react');
class Head extends React.Component {
    render(){
        return(
            <div className="head" >      
                    <div id="number">
                        <span>Казань </span><span>8 800 467 98 32</span>
                    </div>
                    <div id="logo"></div>
                    <div id="vedro"></div>
            </div>
        )
    }
}
module.exports = Head; 