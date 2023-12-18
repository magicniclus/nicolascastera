import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Script from 'next/script';

const page = () => {
    return (
        <>
            <NavBar />

            {/* Ajoutez le snippet de script pour l'événement de conversion ici */}

            <main className='mx-auto flex max-w-5xl items-center justify-center flex-col p-6 lg:px-8 min-h-[calc(100vh-96px)]' >
                <h1 className="flex flex-col mx-auto py-10 text-center lg:text-5xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
                  Merci
                </h1>
                <div className="text-gray-700">
                  <p className="mt-2">
                    Pour planifier un rendez-vous directement, veuillez choisir votre créneau horaire ci-dessous.
                  </p>
                </div>
                <div className="calendly-inline-widget" data-url="https://calendly.com/nicolascastera-rdv/rendez-vous-decouverte-gratuit" style={{ width: '100%', height: '700px', marginTop: "30px" }}></div>
            </main>
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            <Footer />
        </>
    );
};

export default page;
