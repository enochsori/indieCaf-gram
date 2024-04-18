import { Link } from 'react-router-dom';
import { MdAddHome } from 'react-icons/md';
import { PiMessengerLogoBold } from 'react-icons/pi';
import { CgLogIn, CgLogOut } from 'react-icons/cg';
import HoverMessage from './HoverMessage';
import { useState } from 'react';

export type Menu = { menu: string };
type DisplayMenu = { cafe: boolean; messenger: boolean; login: boolean };
const hoverMenuStyle = 'relative text-3xl';

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState<DisplayMenu>({
    cafe: false,
    messenger: false,
    login: false,
  });

  const handleHoverEvent = (menu: 'cafe' | 'messenger' | 'login') => {
    setDisplayMenu({ ...displayMenu, [menu]: !displayMenu[menu] });
  };

  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link to='/' className='flex items-center hover:opacity-80'>
        <img
          src='favicon.ico'
          alt='Logo img'
          className='w-16 rounded-lg mr-4'
        />
        <h1 className='font-bold text-3xl'>indieCafégram</h1>
      </Link>
      <nav className='flex items-center gap-10 font-semibold'>
        <Link
          to='/new-Café'
          className={hoverMenuStyle}
          onMouseEnter={() => handleHoverEvent('cafe')}
          onMouseLeave={() => handleHoverEvent('cafe')}
        >
          <MdAddHome />
          {displayMenu.cafe && (
            <div className='absolute top-8 -left-5'>
              <HoverMessage menu='Add a café' />
            </div>
          )}
        </Link>

        <Link
          to='/messenger'
          className={hoverMenuStyle}
          onMouseEnter={() => handleHoverEvent('messenger')}
          onMouseLeave={() => handleHoverEvent('messenger')}
        >
          <PiMessengerLogoBold />
          {displayMenu.messenger && (
            <div className='absolute top-8 -left-6'>
              <HoverMessage menu='Messenger' />
            </div>
          )}
        </Link>

        <Link
          to='/login'
          className={hoverMenuStyle}
          onMouseEnter={() => handleHoverEvent('login')}
          onMouseLeave={() => handleHoverEvent('login')}
        >
          <CgLogIn />
          {/* <CgLogOut /> */}
          {displayMenu.login && (
            <div className='absolute top-8 -left-6'>
              <HoverMessage menu='Login' />
            </div>
          )}
        </Link>
      </nav>
    </header>
  );
}
