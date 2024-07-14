import React from 'react'

import "./SearchBox.css";
const SearchBox = () => {
  return (
    <div>
      <header className='app_header'>
        <form>
            <input type="text" className='task_input' placeholder='Search'></input>
            <button type="submit" className='search_task'>Search</button>
        </form>
    </header>
    </div>
  )
}

export default SearchBox
