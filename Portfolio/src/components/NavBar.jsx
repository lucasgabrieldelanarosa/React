import '../styles/components/navBar.scss';

export default function NavBar() {
    return (

        <nav className='nav'>
            <button className='nav-btn'>Home</button>
            <button className='nav-btn'>Skills</button>
            <button className='nav-btn'>Projects</button>
            <button className='nav-btn'>About</button>
            <button className='nav-btn'>Contacts</button>
        </nav>

    )
}