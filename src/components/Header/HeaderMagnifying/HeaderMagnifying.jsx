import React from 'react'
import magnifyingWhite from '../../../img/magnifyier_white.png';
import buttonClose from '../../../img/close.png';

import s from '../Header.module.scss'

const HeaderMagnifying = ({ clickOnMagnifyingClose, results }) => {
    const [informationArray, setInformationArray] = React.useState(results);
    const [searchTerm, setSearchTerm] = React.useState('');

    const filterInfo = (searchText, listOfInfo) => {
        if (!searchText) {
            return listOfInfo
        }

        return listOfInfo.filter((e) =>
            ((e.description + e.title).toLowerCase()).includes(searchText.toLowerCase())
        )
    }

    React.useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredInfoText = filterInfo(searchTerm, results)
            setInformationArray(filteredInfoText)
        }, 300)

        return () => clearTimeout(Debounce)
    }, [searchTerm])

    return (
        <div className={s.wrapper_magnifying}>
            <div className={s.magnifying_content}>
                <div>
                    <div className={s.head_manifying}>
                        <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Я ищу' />
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
                {
                    informationArray.map((item) => (
                        <div className={s.searching_results} key={item.id}>
                            <a href="#!">
                                {item.title}
                            </a>

                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default HeaderMagnifying;