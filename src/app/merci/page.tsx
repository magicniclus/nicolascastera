import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Script from 'next/script'; // Importez le composant Script de Next.js

const page = () => {
    return (
        <>
            <NavBar />

            {/* Ajoutez le snippet de script pour l'événement de conversion ici */}
            <Script 
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        gtag('event', 'conversion', {'send_to': 'AW-11428734822/Dnn6CJiNsvwYEObO0skq'});
                    `
                }}
            />

            <main className='mx-auto flex max-w-5xl items-center justify-center flex-col p-6 lg:px-8 min-h-[calc(100vh-96px)]' >
                <h1 className="flex flex-col mx-auto py-10 text-center lg:text-5xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
                  Merci
                </h1>
                <div className="text-gray-700">
                  <p className="mt-2">
                    Je vous recontacterais dans les plus brefs délais.
                  </p>
                </div>
            </main>
            
            <Footer />
        </>
    );
};

export default page;
