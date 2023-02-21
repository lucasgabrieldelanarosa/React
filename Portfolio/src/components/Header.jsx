import '../styles/components/header.scss';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import NavBar from './NavBar';

export default function Header() {

  const [menuBar, setMenu] = useState(true);


  return (
    <>

    <header className='header'>

      <aside>

        <h1 className='header-title'>
          Lucas Gabriel
        </h1>

        {
          menuBar ?
            <AiOutlineMenu className='header-menuBtn'
              onClick={() => setMenu(false)}
            /> :
            <AiOutlineClose className='header-menuBtn'
              onClick={() => setMenu(true)}
            />
        }

      </aside>

    </header>

          {
            !menuBar ?
    
              <NavBar />
    
              :
              !<NavBar />
          }
    </>
  )
}
