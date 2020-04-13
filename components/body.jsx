var React = require('react');
var axios = require('axios');
class Body extends React.Component {
    setOrder(){
    let dataname = "";
    let dataartik = "";
    let costname = document.getElementsByClassName('namee');
    let costarticul = document.getElementsByClassName('articulO');
    let phone = document.getElementById('orderphone').value;
    for(let i=0;i<costname.length;i++){
        dataname = dataname + costname[i].innerHTML + "/";
    }
    for(let i=0;i<costarticul.length;i++){
        dataartik = dataartik + costarticul[i].innerHTML + "/";
    }
    let data = {
        name: dataname,
        articul:dataartik,
        phone: phone
    }
    axios.post('./rest/order.php',JSON.stringify(data))
    .then(function(response){
        console.log(response.data);
        document.getElementById('bin').style.display = 'none';
    })
    }
    render(){
        return(
           <div id='delete'>
               <div id="bin">
                   <biv id="text"></biv>
                   <span>Ведите свой номер:</span>
                   <input type="text" id="orderphone"/>
                   <p className="sentgolg" onClick={this.setOrder}>заказать</p>
               </div>
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