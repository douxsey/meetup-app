import React, {useContext}  from 'react'
import { ApiContext } from '../components/ApiContext';
let Header = () => {
  const {filterMeetups} = useContext(ApiContext)
  return (
    <header>
    <ul>
      <li>
        <div></div>
      </li>
      <li><h3>Meetups</h3></li>
      <li><a href="#" id="theme-switcher"></a></li>
    </ul>
    <p><input type="text" onChange={event => filterMeetups(event.target.value)} placeholder="Rechercher un meetup"/></p>
  </header>
  )
}
export default Header;