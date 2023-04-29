import './navbar.scss';

function NavBar() {
  return (
    <div>
      <nav role='navigation' className='primary-navigation'>
        <ul>
          <li className='pb-6 text-3xl font-bold tracking-tight md:text-5xl'>
            <a href='/'>Photos</a>
          </li>

          <li className='pb-6 text-3xl font-bold tracking-tight md:text-5xl'>
            <a className='text-gray-600' href='about'>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
