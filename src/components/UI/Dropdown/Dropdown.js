import React from 'react'
import { v4 } from 'uuid';

import './Dropdown.css'

export default (props) => {
  const items = [];

  return (
    <ul className="main-navigation">
      <li className='nav-item'><a href="/">WordPress Development</a>
        <ul className='nested-navigation'>
          <li className='nav-item'><a href="/">Themes</a></li>
          <li className='nav-item'><a href="/">Plugins</a>
          </li>
          <li className='nav-item'><a href="/">Custom Post Types</a>
            <ul className='nested-navigation'>
              <li className='nav-item'><a href="/">Portfolios</a>
                <ul className='nested-navigation'>
                  <li className='nav-item'><a href="/">Ajax</a></li>
                  <li className='nav-item'><a href="/">jQuery</a></li>
                </ul>
              </li>
              <li><a href="/">Testimonials</a></li>
            </ul>
          </li>
          <li className='nav-item'><a href="/">Options</a></li>
        </ul>
      </li>

    </ul>
  )
}
