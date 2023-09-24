'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ProviderProps, useEffect, useState } from 'react';
import { signIn, signOut, getProviders, useSession } from 'next-auth/react';

const Navbar = () => {

        const { data: session } = useSession();

        // FIX: Make sure default state for isLogged is false
        const [isLogged, setIsLogged] = useState(true);
        const [providers, setProviders] = useState<{} | null>(null);

        useEffect(() => {
                const setProvider = async () => {
                        const res = await getProviders();

                        setProviders(res);
                }
                setProvider();
        }, [])

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
                                {
                                        session?.user
                                                ? (
                                                        /* signout, profile, other user's utility (if exists)... */
                                                        <>
                                                                <span onClick={() => signOut()} className='auth-btn'>Sign Out</span>
                                                                <Link href='/profile'>
                                                                        <Image
                                                                                src={session?.user?.image || ''}
                                                                                alt='profile'
                                                                                className='auth-user'
                                                                                width={40}
                                                                                height={40} />
                                                                </Link>
                                                        </>
                                                )
                                                : (
                                                        providers && Object.values(providers).map((provider: any) => (
                                                                <span
                                                                        key={provider?.name}
                                                                        onClick={() => signIn(provider?.id)}
                                                                        className='auth-btn'>

                                                                        Sign In
                                                                </span>
                                                        ))
                                                )
                                }
                        </section>
                </nav>
        )
}

export default Navbar;
