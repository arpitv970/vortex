import Link from 'next/link';

const Navbar = () => {
  return (
	<nav className='navbar'>
		<section className='logo-sec'>
                        <h1 className='logo-txt'><Link href='/'>Vortex</Link></h1>
                </section>

                <section className='tabs-sec'>
                        <span className='nav-item'><Link href='/about'>About</Link></span>
                        <span className='nav-item'><Link href='/contact'>Contact</Link></span>
                </section>

                <section className='auth-sec'>
                        <span className='auth-btn'>Sign In</span>
                </section>
	</nav>
  )
}

export default Navbar;
