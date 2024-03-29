"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import ButtonFixed from "./components/ButtonFixed";
import CTA from "./components/CTA";
import Entreprise from "./components/Entreprise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImgWithText from "./components/ImgWithText";
import LogoContainer from "./components/LogoContainer";
import NavBar from "./components/NavBar";
import Qui from "./components/Qui";
import Realisations from "./components/Realisations";
import ServiceLittleBanner from "./components/ServiceLittleBanner";
import Temoignage from "./components/Temoignage";

gsap.registerPlugin(ScrollTrigger);

const googleCards = [
  {
    title: "Search",
    text: "Positionnez-vous devant les bonnes requêtes afin d'augmenter vos chances de conversion.",
    img: "/logo/search.png",
  },
  {
    title: "Shopping",
    text: "De loin le meilleur outil pour les e-commerçants, augmentez votre visibilité et votre rentabilité.",
    img: "/logo/shopping.png",
  },
  {
    title: "Display",
    text: "Affichez vos annonces sur des sites web pertinents pour votre activité (achat de bannière, vidéo, etc.) sur le réseau Google Display.",
    img: "/logo/display.png",
  },
  {
    title: "Youtube",
    text: "Diffusez vos annonces sur le premier réseau mondial de vidéo grâce à des formats innovants, au CPC ou au CPM.",
    img: "/logo/youtube.png",
  },
  {
    title: "Remarketing",
    text: "Ciblez les personnes qui ont déjà visité votre site web ou votre application mobile et maximisez votre retour sur investissement (ROI).",
    img: "/logo/remarketing.png",
  },
  {
    title: "Apps",
    text: "Faites la promotion de votre application mobile sur le réseau Google Play Store ou iOS et boostez vos téléchargements. Obtenez le meilleur ROI.",
    img: "/logo/apps.png",
  },
];

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
        },
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
          <Hero />
        </div>
        <Entreprise />
        <ImgWithText
          imgUrl="/img/resultat.png"
          title="Devenez maitre de votre rentabilité"
          paragraphs={[
            <p key="paragraph1">
              Grâce à Google, ciblez votre client idéal en fonction de son
              comportement de recherche, son historique de recherche et sa zone
              géographique. Vous vous positionnez devant les bonnes personnes
              afin d'augmenter vos chances de conversion.
            </p>,
            <p key="paragraph4">
              <span className="font-bold">Suivi et Développement :</span>{" "}
              J'optimise en continu vos campagnes en ajustant les mots-clés, les
              enchères, les audiences, ou encore les annonces.
            </p>,
            <p key="paragraph2">
              <span className="font-bold">Flexibilité Budgétaire :</span>{" "}
              Ajustez votre budget en continu pour l'aligner avec vos objectifs
              commerciaux et les variations saisonnières de votre activité.
            </p>,
            <p key="paragraph3">
              <span className="font-bold">Transparence Totale :</span> Grâce aux
              notifications instantanées des ventes réalisées, des appels et des
              formulaires générés par la campagne, ainsi qu'à un reporting
              dédié, vous avez une vision claire et précise de la rentabilité de
              votre investissement. Cette transparence vous permet de prendre
              des décisions éclairées pour optimiser vos stratégies marketing.
            </p>,
          ]}
        />
        <ServiceLittleBanner />
        <div id="services">
          <LogoContainer data={googleCards} />
        </div>
        <CTA />
        <Realisations />
        <Qui />
        <div ref={testimonialRef}>
          <Temoignage />
        </div>
        <div className="opacity-0" ref={buttonRef}>
          <ButtonFixed />
        </div>
      </main>
      <Footer />
    </>
  );
}
