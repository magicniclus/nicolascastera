import { ClockIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CTA = () => {
    return (
        <section>
            <div className='mx-auto flex max-w-5xl p-6 lg:px-8 lg:pb-32 pb-20 md:flex-row flex-col justify-between items-start md:items-center bg-white'>
                <div className='p-10 bg-textSecondary rounded-xl w-full text-white flex items-center justify-between md:flex-row flex-col'>
                    <div>
                        <h2 className='text-2xl font-bold'>Besoin d'un audit gratuit ?</h2>
                        <p className='mt-3'>Contactez-moi directement</p>
                    </div>
                    <div className='flex flex-col md:mt-0 mt-10'>
                        <a href="#form" className='text-lg  bg-yellow hover:bg-yellow/80 rounded-lg p-4 flex transition-all duration-100 ease-in-out'>
                            <EnvelopeIcon className='h-6 w-6 mr-2' />
                            Formulaire de contact
                        </a>
                        <a href="https://calendly.com/nicolascastera-rdv/rendez-vous-decouverte" className='text-lg bg-text hover:bg-white hover:text-text rounded-lg p-4 flex mt-3 transition-all duration-100 ease-in-out'>
                            <ClockIcon className='h-6 w-6 mr-2' />
                            Planifier un appel de 30min
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;