import React from 'react';
import img_1 from '../../img/img_1.jpg';


function NewsBlock() {
    return (
        <div>
            <div className="news__items">
                <img src={img_1} alt="image1" />
                <p>Невозможные объекты: в глубоком космосе найдены "разрушители Вселенной"</p>
            </div>
        </div>
    )
}

export default NewsBlock