import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Список дел: </h1>
            <span>
                Выполнено: 0 из 3
            </span>
        </div>
    );
}

export default Header;
