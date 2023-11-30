"use client"

import React, { useRef, useEffect } from 'react';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ImgWithText from './components/ImgWithText'
import ImgWithTextWhite from './components/ImgWithTextWhite'
import Qui from './components/Qui'
import Temoignage from './components/Temoignage'
import Footer from './components/Footer'
import ButtonFixed from './components/ButtonFixed'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LogoContainer from './components/LogoContainer';

gsap.registerPlugin(ScrollTrigger);

const googleCards = [
  {
    title: "Search",
    text: "Positionnez-vous devant les bonnes requetes afin d'augmenter vos chances de conversion.",
    img: "/logo/search.png"
  },
  {
    title: "Shopping",
    text: "De loins le meilleur outils pour les e-commerçants, augmentez votre visibilité et votre rentabilité.",
    img: "/logo/shopping.png"
  }, 
  {
    title: "Display", 
    text: "Affichez vos annonces sur des sites web pertinents pour votre activité (achat de banière, vidéo, etc...) sur le réseau Google Display.",
    img: "/logo/display.png"
  },
  {
    title: "Youtube",
    text: "Diffusez vos annonces sur le 1er réseau mondial de video grace à des formats innovants, au CPC ou au CPM.",
    img: "/logo/youtube.png"
  }, 
  {
    title: "Remarketing",
    text: "Ciblez les personnes qui ont déjà visité votre site web ou votre application mobile et maximisez votre ROI.",
    img: "/logo/remarketing.png"
  },
  {
    title: "Apps",
    text: "Faites la promotion de votre application mobile sur le réseau Google Play Store ou iOs et boostez vos téléchargements. Optenez le meilleur ROI.",    
  }
]

export default function Home() {
    const formRef = useRef(null);
    const testimonialRef = useRef(null);
    const buttonRef = useRef(null);

      useEffect(() => {
        if (formRef.current && buttonRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "bottom 30%",     
                    end: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.fromTo(
                buttonRef.current,
                { opacity: 0 },
                {
                    duration: 0.2,
                    opacity: 1,
                    ease: "power1.out",
                }
            );
          

        }
    }, [formRef, testimonialRef, buttonRef]);
  
  return (
    <>
    <NavBar />
    <main className="relative">
      <div ref={formRef}>
      <Hero/>
      </div>
      <ImgWithText  imgUrl="/img/resultat.png" title="Devenez maitre de votre rentabilité" paragraphs={[ <p  key="paragraph1">Grace à Google, ciblez votre client idéal en fonction de son comportement de recherche, son historique de recherche et sa zone géographique. Vous vous positionné devant les bonnes personnes afin d'augmenter vos chance de conversion.</p>, <p  key="paragraph4"><span className="font-bold">Suivi et Développement :</span> J'optimise en continu vos campagnes en ajustant les mots clés, les enchaires, les audiences ou enore les annonces.</p>, <p key="paragraph2"><span className="font-bold">Flexibilité Budgétaire :</span> Ajustez votre budget en continu pour l'aligner avec vos objectifs commerciaux et les variations saisonnières de votre activité.</p>, <p key="paragraph3"><span className="font-bold">Transparence Totale :</span> Grâce aux notifications instantanées des ventes réalisées, des appels et des formulaires générés par la campagne, ainsi qu'à un reporting dédié, vous avez une vision claire et précise de la rentabilité de votre investissement. Cette transparence vous permet de prendre des décisions éclairées pour optimiser vos stratégies marketing.</p> ]} />
      {/* <ImgWithTextWhite imgUrl='/img/desktop.png' title="Internet, votre meilleur apporteur d’affaires" paragraphs={[<p key="paragraph1">Avec mes services, vous recevrez des demandes de devis ciblées de clients potentiels précisément au moment où ils expriment leur besoin de vos services, et ce, 24 heures sur 24, 7 jours sur 7.</p>, <p key="paragraph2"><span className="font-bold">Taux de conversion exceptionnel :</span>Je suis fiers d'offrir l'un des taux de conversion les plus élevés du marché.</p>, <p key="paragraph3"><span className="font-bold">Flexibilité totale :</span>Sans engagement, vous offrant la liberté de l'interrompre à tout moment.</p>, <p key="paragraph4"><span className="font-bold">Résultats concrets :</span>Préparez-vous à voir votre boîte mail se remplir de demandes de devis détaillées et à recevoir des appels quotidiens de prospects qualifiés désireux de collaborer avec vous.</p>, <p key="paragraph5" className='font-light'>Grace à internet, bénéficiez du meilleur taux de transformation du marché sans la moindre concurrence sur vos prospects.</p>]} />
      <ImgWithText  imgUrl="/img/phone.png" title="Jusqu’à 40% de vos visiteurs en propsect" paragraphs={[ <p key="paragraph1">Augmentez votre visibilité auprès des clients potentiels en quête de vos services. Gagnez du trafic de qualité en apparaissant sur Google et Facebook, les plateformes les plus influentes du web.</p>, <p key="paragraph2"><span className="font-bold">Impact de la Recherche en Ligne :</span> En France, 80% des consommateurs effectuent des recherches en ligne avant de sélectionner un prestataire. Avec Google dominant plus de 90% du marché des moteurs de recherche, une absence sur cette plateforme équivaut à céder un avantage considérable à vos concurrents.</p>]} /> */}
      <div>
        <LogoContainer data={googleCards} />
      </div>
      <Qui />
      <div ref={testimonialRef}>
        <Temoignage />
      </div>
      <div className='opacity-0' ref={buttonRef}>
        <ButtonFixed />
      </div>
    </main>
    <Footer />
    </>
  )
}
