import React from 'react';
import ButtonPhone from './ButtonPhone';

const navigation = [
  { name: 'Qui suis-je ?', href: '#qui' },
//   { name: 'blog', href: '#' },
    { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#form' },
]

const NavBar = () => {
    return (
        <header className='text-text'>
            <nav className="mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex items-top">
                    <a href="/" className="">
                        <span className="sr-only">Nicolas CASTERA</span>
                        <img className="h-14 w-auto" src="/logo/logo.png" alt="logo Nicolas CASTERA" />
                    </a>
                    <img className="h-14 w-auto" src="/logo/certifica.png" alt="logo Certifié Google" />
                </div>
                <div className='md:block hidden'>
                    {navigation.map((item, id) => (
                        <a href={item.href} key={id} className='mr-7'>{item.name}</a>    
                    ))
                    }
                </div>
                <ButtonPhone />
            </nav>
        </header>
    );
};

export default NavBar;