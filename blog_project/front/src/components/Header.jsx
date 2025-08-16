import logo from './../assets/icons/logo.svg'
import './../css/header.css'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const menuHandler = () => {
    document.querySelector('#bars').classList.toggle('active');
    document.querySelector('#menuContainer').classList.toggle('active');
  };

  return (
    <header>
      <div className='headerTitle'>
        <div>
          <img className='logo' src={logo} alt='logo' />
          <h1>سفرکن</h1>
        </div>
        <div id='bars' onClick={menuHandler}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
      <HeaderMenu />
    </header>
  )
}

export default Header