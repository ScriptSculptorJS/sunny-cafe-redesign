
import { Link } from 'react-router-dom';
import info from '../../../public/assets/info.png';
import menu from '../../../public/assets/menu.png';
import telephone from '../../../public/assets/phone-call.png';
import './navbar.css';

function Nav() {

  return (
    <nav id='navContainer'>
      <Link to='/'><img  src={info} className='icon' title="info icons" alt='Info icons created by Freepik - Flaticon'/></Link>
      <Link to='/menu'><img src={menu} className='icon' title="menu icons" alt='Menu icons created by Freepik - Flaticon'/></Link>
      <Link to='/contact'><img src={telephone} className='icon' title="menu icons" alt='Phone call icons created by Ilham Fitrotul Hayat - Flaticon'/></Link>
    </nav>
  )
}

export default Nav