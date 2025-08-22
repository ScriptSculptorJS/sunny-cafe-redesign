import './header.css';
import sun from '../../../public/assets/rising-sun.png';

function Header() {

  return (
    <header id='headerContainer' className='container'>
      <img id='heroImage' src={sun} title="rising sun icons" alt='Rising sun icons created by Muhammad_Usman - Flaticon' />
      <h1 id='logo' className='family'>Sunny Cafe</h1>
    </header>
  )
}

export default Header;