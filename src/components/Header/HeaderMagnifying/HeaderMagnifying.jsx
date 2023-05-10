import magnifyingWhite from '../../../img/magnifyier_white.png';
import buttonClose from '../../../img/close.png';

import s from '../Header.module.scss'

const HeaderMagnifying = ({ clickOnMagnifyingClose }) => {
    return (
        <div className={s.wrapper_magnifying}>
            <div className={s.magnifying_content}>
                <div>
                    <div className={s.head_manifying}>
                        <input type="text" placeholder='Я ищу' />
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
                <div className={s.searching_results}>
                    <a href="#!">
                        Документы
                    </a>

                    <p>Контекстная панель Кнопка Описание Создать <span>документ</span> Вызов меню выбора создаваемого типа <span>документа</span>. Настроить Переход к диалогу настройки внешнего вида отчётной формы. Excel Экспорт ...</p>
                </div>
                <div className={s.searching_results}>
                    <a href="#!">
                        Работа с документами в веб-браузере
                    </a>

                    <p>Контекстная панель Кнопка Описание Создать <span>документ</span> Вызов меню выбора создаваемого типа <span>документа</span>. Настроить Переход к диалогу настройки внешнего вида отчётной формы. Excel Экспорт ...</p>
                </div>

                <div className={s.searching_results}>
                    <a href="#!">
                        Агентство недвижимости «Доки 24/7»
                    </a>

                    <p>Контекстная панель Кнопка Описание Создать <span>документ</span> Вызов меню выбора создаваемого типа <span>документа</span>. Настроить Переход к диалогу настройки внешнего вида отчётной формы. Excel Экспорт ...</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderMagnifying;