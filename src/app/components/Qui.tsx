import React from 'react';
import Ligne from "./Ligne";
import { MapPinIcon } from '@heroicons/react/24/solid';

const cards = [
    {
        title: "Proximité",
        text: "En tant qu'expert en marketing digital, je m'engage à vous fournir des leads qualifiés et des stratégies sur-mesure adaptées à votre secteur, assurant une collaboration étroite et personnalisée, sans engagement ni frais de service."
    },
    {
        title: "Efficacité", 
        text: "Je maximise l'efficacité de vos campagnes Google Ads avec des ciblages précis et des solutions clés en main pour divers secteurs d'activité, en tant que spécialiste dédié et sans contraintes de service."
    },
    {
        title: "Rentabilité",
        text: "Augmentez votre rentabilité grâce à mes services de marketing digital personnalisés, offrant des leads qualifiés et des campagnes publicitaires efficaces, sans engagement ni frais de service."
    }
];

const Qui: React.FC = () => {
    return (
        <section className="bg-gray/60" id="qui">
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:pt-32 pt-20 md:flex-row flex-col justify-between items-center">
                <div className="md:w-6/12 w-full text-text">
                    <h2 className="text-2xl font-bold">Qui suis-je ?</h2>
                    <div className="mt-7">
                        <Ligne />
                    </div>
                    <div className='w-full flex justify-between py-10'>
                        <p>Nicolas CASTERA</p>
                        <div className='flex'>
                            <MapPinIcon className="h-5 w-5 text-yellow" aria-hidden="true" />
                            <p className='ml-2'>Bordeaux</p>
                        </div>
                    </div>
<p>Expert en marketing digital et communication en ligne, basé à Bordeaux, je possède plus de 10 ans d'expérience dans l'optimisation de campagnes Google. Ma spécialité réside dans le développement et la gestion de campagnes publicitaires performantes, avec un accent particulier sur l'augmentation des taux de conversion et la génération de résultats mesurables. Je propose des stratégies personnalisées pour chaque client, m'adaptant à leurs objectifs spécifiques tout en offrant flexibilité budgétaire et transparence totale. Mon objectif ultime est d'augmenter significativement le retour sur investissement des campagnes publicitaires, assurant une croissance tangible pour mes clients à travers des stratégies éprouvées et innovantes, le tout avec une approche sans engagement ni frais de service cachés.</p>
                </div>
                <div className="md:w-6/12 w-full flex justify-center items-center md:mt-0 mt-12">
                    <img src="/img/moi2.png" className="max-h-[500px] h-auto max-w-[300px]" alt="Image Description" />
                </div>
            </div>
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:pb-32 pb-20 md:flex-row flex-col justify-between items-center mt-16">
                {
                    cards.map((card, index) => (
                        <div className='md:w-4/12 w-full flex flex-col items-center md:max-w-[30%] md:min-h-[360px] p-7 text-white bg-textSecondary rounded-md md:mt-0 mt-7' key={index}>
                            <h3 className='text-xl font-bold mt-4'>{card.title}</h3>
                            <p className='text-center mt-4'>{card.text}</p> 
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Qui;