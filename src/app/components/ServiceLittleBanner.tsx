import React from 'react';

const ServiceLittleBanner = () => {
    return (
        <section className='bg-gray/40'>
            <div className='mx-auto flex max-w-5xl p-6 lg:px-8 lg:py-10 md:flex-row flex-col justify-between items-center md:items-center'>
                <ul className='flex w-full justify-between items-center text-textSecondary md:flex-row flex-col'>
                    <li>
                        <h2 className='text-2xl font-bold md:mt-0 mt-3'>🛒 E-Commerce</h2>
                    </li>
                    <li>
                        <p className='text-2xl font-bold md:mt-0 mt-3'>💻 Acquisition de leads</p>
                    </li>
                    <li>
                        <p className='text-2xl font-bold md:mt-0 mt-3'>📱 Vente d'applications</p>
                    </li>
                    <li>
                        <p className='text-2xl font-bold md:mt-0 mt-3'>✨ Notoriété</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ServiceLittleBanner;