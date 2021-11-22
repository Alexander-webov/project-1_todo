import React from 'react';

import './Search.css'

const Search = ({ onChangeSearch, filterBtnActive, filterBtnAll, filterBtnDone }) => {
    return (
        <div className="search">
            <input
                type="text" placeholder="Для поиска начните вводить название..."
                onChange={onChangeSearch}
            />
            <button onClick={filterBtnAll}>Все</button>
            <button onClick={filterBtnActive} >Активные</button>
            <button onClick={filterBtnDone}>Выполненые</button>
        </div>
    );
}

export default Search;
