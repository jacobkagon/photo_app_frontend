/* eslint-disable jsx-a11y/anchor-is-valid */

import './navbar.scss';

function NavBar() {
  return (
    <div>
      <nav role='navigation' className='primary-navigation'>
        <ul className='align-navbar'>
          <li className='pb-6 text-3xl font-bold tracking-tight text-black md:text-5xl'>
            <a href='/'>Home</a>
          </li>

          <li className='pb-6 text-3xl font-bold tracking-tight text-black md:text-5xl'>
            <a href='about'>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
