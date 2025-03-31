import React, { useState } from 'react'
import styles from "../styles/search.module.css"

const SearchBar = (props) => {
  const {onSearch, searchProperties} = props;
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = e => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text, searchProperties);
  };

    return (
      <div>
        <input className={styles.searchInput} placeholder='Search' color={'#ffffff'} 
        onChange={handleSearchChange}
        value={searchText}
        />
      </div>
  )
}

export default SearchBar
