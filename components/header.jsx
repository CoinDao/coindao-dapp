import React, { Fragment, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Header = () => {

    const [search, setSearch] = useState("")

  return (
    <Fragment>
        <header className='header'>
            <h1>CoinDAO</h1>
            <div className='search-input'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                <BsSearch size={14} className='search-icon' />
            </div>
        </header>
    </Fragment>
  )
}

export default Header