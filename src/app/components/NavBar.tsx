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
                <div className="flex">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Trouver-mon-chantier</span>
                        <img className="h-14 w-auto" src="/logo/logo.png" alt="trouver-mon-chantier" />
                    </a>
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