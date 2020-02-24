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
               <div id="box3">
                   <div id="ringbox"></div>
               </div>
               <div id="box4">
                   <div id="serbox"></div>
               </div>
               <div id="box5"><div id="podvesbox"></div></div>
               <div id="box6"><div id="kulonbox">
                   </div></div>
           </div>
        )
    }
}
module.exports = Body; 