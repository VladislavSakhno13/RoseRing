var React = require('react');
 
class Body extends React.Component {
    render(){
        return(
           <div>
               <div id="box1">
                   <p className="redimg"><img src="img/BMSM.png" alt=""/></p>
               </div>
               <div id="box2">
                   <p className="graybox"></p>
               </div>
               <div id="box3"><div id="ringbox"></div></div>
               <div id="box4"> <p className="more" id="m2">Подробнее</p><div id="serbox"></div></div>
               <div id="box5"> <p className="more" id="m3">Подробнее</p><div id="podvesbox"></div></div>
               <div id="box6"> <p className="more" id="m4">Подробнее</p><div id="kulonbox"></div></div>
           </div>
        )
    }
}
module.exports = Body; 