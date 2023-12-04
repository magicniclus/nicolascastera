"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import ButtonForm from './ButtonForm';
import { addProspect } from '../firebase/dataManager';
import { useRouter } from 'next/navigation'
import LittleCards from './LittleCards';

const Hero = () => {
    const cardsValue = [
        "Augmentez votre visibilité",
        "Générez plus de leads",
        "Obtenez plus de clients",
        "Boostez votre CA"
    ]

    const router = useRouter();
    const [disabled, setDisabled] = useState(true);
    const [value, setValue] = useState({
        name: '',
        email: '',
        tel: '',
        codePostal: '',
        nomEntreprise: "",
        commentaire:""
    });

    useEffect(() => {
        setDisabled(!(value.name && value.email && value.tel && value.codePostal && value.nomEntreprise ));
    }, [value]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProspect(value).then(() => {
            router.push("/merci");
        }).catch((error: any) => {
            console.log(error);
        });
    };

    return (
        <section >
            <div className='mx-auto flex max-w-5xl px-6 lg:pb-32 pb-20 pt-14 lg:px-8 md:flex-row flex-col justify-between items-center'>
                <div className='md:w-5/12 w-full'>
                    <h1 className='sm:text-6xl text-5xl font-bold text-textSecondary leading-snug'>Votre <span className="underline-yellow">expert Google ads</span></h1>
                    <p className='text-text text-xl mt-10 font-semibold'>Depuis <span className='text-2xl text-textSecondary'>2016 </span>je vous accompagne pour atteindre <span className='text-2xl text-textSecondary'>vos objectifs</span></p>
                    <p className='text-text text-xl font-semibold mt-2'>Efficace, fiable et continu</p>
                    <div className='mt-10'>
                    {
                        cardsValue.map((card, index) => (
                            <LittleCards key={index} value={card} />
                        ))
                    }
                    </div>
                </div>
                <div className='md:w-6/12 w-full md:mt-0 mt-12'>
                    <form onSubmit={handleSubmit} id="form" className='sm:px-7 px-2 py-16 bg-gray rounded-md shadow-md flex flex-col items-center w-full'>
                        <h2 className='text-center text-textSecondary text-4xl font-bold'>Contact</h2>
                        <p className='text-center text-xs mt-5'>Laissez-nous un message, nous vous recontactons sous 24h.</p>
                        <p className='text-center text-xs mt-3'>Pour planifier directement un appel cliquez <a href="https://calendly.com/nicolascastera-rdv/rendez-vous-decouverte-gratuit" className='text-yellow underline text-base'>ici</a>.</p>
                        <div className='md:w-11/12 mx-auto mt-8'>
                            <input 
                            type="text" 
                            name="fullname"
                            placeholder="Nom, prénom" 
                            value={value.name} 
                            onChange={(e) => setValue({ ...value, name: e.target.value })} 
                            className={`px-4 py-2 rounded-md mt-4 w-[100%]`}
                        />
                            <div className='flex justify-between w-[100%]'>
                                <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={value.email} 
                            onChange={(e) => setValue({ ...value, email: e.target.value })} 
                            className='px-4 py-2 rounded-md mt-4 w-[48%]'
                        />
                        <input 
                            type="tel" 
                            name="tel" 
                            placeholder="Téléphone" 
                            value={value.tel} 
                            onChange={(e) => setValue({ ...value, tel: e.target.value })} 
                            className='px-4 py-2 rounded-md mt-4 w-[48%]'
                        />
                            </div>
                            <input 
                            type="text" 
                            name="nomEntreprise" 
                            placeholder="Nom d'entreprise" 
                            value={value.nomEntreprise} 
                            onChange={(e) => setValue({ ...value, nomEntreprise: e.target.value })} 
                            className={`px-4 py-2 rounded-md mt-4 w-[100%]`}
                        />
                        <input 
                            type="text" 
                            name="codePostal" 
                            placeholder="Code postal" 
                            value={value.codePostal} 
                            onChange={(e) => setValue({ ...value, codePostal: e.target.value })} 
                            className={`px-4 py-2 rounded-md mt-4 w-[100%]`}
                        />
                        <textarea
                            name="Commentaire"
                            placeholder="Comment puis-je vous aider ?"
                            value={value.commentaire}
                            onChange={(e) => setValue({ ...value, commentaire: e.target.value })}
                            className={`px-4 py-2 rounded-md mt-4 w-[100%]`}
                        />
                            <div className='flex justify-center'>
                                <ButtonForm id='conversion' disabled={disabled} />
                            </div>
                        </div>
                        <div className='flex w-[100%] mt-5 justify-center text-xs'>
                            <a href="/mentions-legales" className='underline'>Conditions générales </a>
                            <p className='mx-1.5'>et </p>
                            <a href="/politique-de-confidentialite" className='underline'>politique de confidentialité.</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;