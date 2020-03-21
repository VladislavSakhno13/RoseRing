var React = require('react');
 
class Body extends React.Component {
    render(){
        return(
           <div id='delete'>
               <div id="box1">
                   <p className="redimg"><img src="img/BMSM.png" alt=""/></p>
               </div>
               <div id="box2">
                   <p className="graybox"></p>
               </div>
               <div id="box3"><div id="ringbox"></div><p className="more" id="m1">Подробнее</p></div>
               <div id="box4"><div id="serbox"></div><p className="more" id="m2">Подробнее</p></div>
               <div id="box5"><div id="podvesbox"></div> <p className="more" id="m3">Подробнее</p></div>
               <div id="box6"><div id="kulonbox"></div><p className="more" id="m4">Подробнее</p></div>
           </div>
        )
    }
}
module.exports = Body; 