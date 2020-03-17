var React = require('react');
 
class Bottom extends React.Component {
    render(){
        return(
            <div id="bottombox">
                <div id="border">
                <div id="ferstbottom">
                   <p className="ferst_p">
                       <span>ROSE RING</span>
                       <span>О компании</span>
                       <span>О магазине</span>
                       <span>Таблица размеров</span>
                       <span>Уход за урашением</span>
                   </p>
                   <p className="ferst_p">
                       <span>КАТАЛОГ</span>
                       <span><a href="#box3" className="a">Кольца</a></span>
                       <span><a href="#box4" className="a">Серьги</a></span>
                       <span><a href="#box5" className="a">Подвески</a></span>
                       <span><a href="#box6 " className="a">Колье и Кулоны</a></span>
                   </p>
                   <p className="ferst_p">
                       <span>ПАРТНЕРАМ</span>
                       <span>Сотрудничать</span>
                       <span>Команда</span>
                   </p>
                   <p className="ferst_p">
                       <span>АДРЕСА</span>
                       <span>Пушкина, 37</span>
                       <span>Баумана, 10</span>
                   </p>
                </div>
                </div>
                <div id="secondbottom">
                    <p className="second_p" id="blocl1">
                        <span>Казань</span>
                        <span>8 800 467 32</span>
                    </p>
                    <p  className="second_p">
                        <p id="linkimg">
                            <img src="img/inst.png" alt="" id="imgbottom"/>
                            <img src="img/vk.png" alt="" id="imgbottom"/>
                            <img src="img/face.png" alt="" id="imgbottom"/>
                        </p>
                        
                    </p>
                </div>
            </div>
        )
    }
}
module.exports = Bottom;