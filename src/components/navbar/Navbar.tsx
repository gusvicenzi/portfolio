import React from 'react'
import './navbar.scss'

interface Props {
  items: string[]
}
export const Navbar: React.FC<Props> = ({ items }) => {
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
    <div id='navbar'>
      <nav>
        <ul>
          {mountNavItems()}
        </ul>
      </nav>
    </div>
  )
}