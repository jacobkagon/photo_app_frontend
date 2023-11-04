import './navbar.scss';

function NavBar() {
  return (
    <div>
      <nav role='navigation' className='primary-navigation'>
        <h1 className='navbar-headers'>Don Ashbrook</h1>
        <h2>Photography</h2>
        <ul>
          <li>
            <a className='navbar-text' href='/'>
              Photos
            </a>
          </li>

          <li>
            <a className='navbar-text' href='about'>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
