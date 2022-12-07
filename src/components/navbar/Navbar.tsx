import React, { useState } from 'react'
import './navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  items: string[]
}
export const Navbar: React.FC<Props> = ({ items }) => {
  const [isCliked, setIsClicked] = useState(false)
  const mountNavItems = () => {
    const completeList = items.map(item => mountItem(item))
    return completeList
  }

  const mountItem = (item: string) => {
    return (
      <li key={item}><a href={`#${item}`}>{item}</a></li>
    )
  }

  return (
    <nav>
      <ul className={isCliked ? 'active' : ''}>
        {mountNavItems()}
      </ul>
      <div id="mobile">
        <FontAwesomeIcon icon={isCliked ? faTimes : faBars} onClick={() => setIsClicked(prevState => !prevState)} style={{ cursor: 'pointer' }} />
      </div>
    </nav>
  )
}