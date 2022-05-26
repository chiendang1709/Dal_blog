import React from 'react'

const Search = () => {
  return (
    <div className="search">
    <div className="search__bar">
        <div className="search__icon">
            {/* <img src="/images/search_icon.png" alt="search_icon"/> */}
        </div>
        <div className="search__input">
            <input type="text" placeholder="Tìm kiếm....." name="search"/>
        </div>
    </div>                
</div>  
  )
}

export default Search