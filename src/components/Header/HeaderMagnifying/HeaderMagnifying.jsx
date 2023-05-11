import React from 'react'
import magnifyingWhite from '../../../img/magnifyier_white.png';
import buttonClose from '../../../img/close.png';

import s from '../Header.module.scss'

const HeaderMagnifying = ({ clickOnMagnifyingClose }) => {
    

    async function handleInputChange(event) {
        // const query = event.target.value;
        // const response = await fetch(`searchq=${query}`);
        // const data = await response.json();
        // setResults(data);
    }
    return (
        <div className={s.wrapper_magnifying}>
            <div className={s.magnifying_content}>
                <div>
                    <div className={s.head_manifying}>
                        <input  onChange = {handleInputChange} type="text" placeholder='Я ищу' />
                        <button>
                            <img src={magnifyingWhite} alt="" />
                        </button>
                    </div>

                    <button className={s.button_close}>
                        <img onClick={clickOnMagnifyingClose} src={buttonClose} alt="button close" />
                    </button>
                </div>
            </div>

            <div className={s.searching_results_content}>
                {/* <div className={s.searching_results}>
                    <a href="#!">
                        Документы
                    </a>

                    <p>Контекстная панель Кнопка Описание Создать документ Вызов меню выбора создаваемого типа документа. Настроить Переход к диалогу настройки внешнего вида отчётной формы. Excel Экспорт ...</p>
                </div>         */}
            </div>
        </div>
    );
}

export default HeaderMagnifying;