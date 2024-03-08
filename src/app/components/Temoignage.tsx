"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import ButtonPhone from "./ButtonAction";

const cards = [
  {
    text: "Travailler avec Nicolas a été une expérience révolutionnaire pour notre stratégie de communication. Grâce à son expertise en Google Ads, nous avons efficacement atteint notre public cible et développé des campagnes qui ont réellement résonné auprès de nos clients. Nicolas comprend l'importance de la collaboration, et son approche personnalisée a contribué à renforcer nos relations avec des clients communs. Sa capacité à optimiser nos campagnes et à maximiser notre budget publicitaire a été un atout majeur pour notre entreprise.",
    stars: 5,
    name: "Nancy M/Agence de communication",
  },
  {
    text: "Nicolas CASTERA a joué un rôle crucial dans la croissance spectaculaire de Terabois. Depuis que nous avons commencé à travailler ensemble, nous avons triplé notre chiffre d'affaires, un résultat que je n'aurais jamais imaginé possible. Sa compréhension approfondie du marketing digital, combinée à une connaissance spécifique de l'industrie de l'isolation et de la couverture, a permis de mettre en place des stratégies sur mesure qui ont réellement fonctionné. Je suis extrêmement reconnaissant pour son engagement et son expertise qui ont transformé notre entreprise.",
    stars: 5,
    name: "Franck C/Terabois",
  },
  {
    text: "Travailler avec Nicolas CASTERA a transformé notre perception du marketing digital. Dès le début, son expertise et son adaptation à l'univers spécifique des panneaux solaires ont été des leviers majeurs pour notre croissance. L'impact de ses stratégies innovantes s'est rapidement manifesté par un accroissement notable de notre clientèle et une présence accrue sur le marché. Grâce à Nicolas, nous avons non seulement atteint nos objectifs, mais les avons surpassés, bénéficiant d'une visibilité et d'une rentabilité exceptionnelles. Je ne peux que recommander Nicolas à toute entreprise désireuse de marquer son empreinte en ligne avec efficacité et créativité.",
    stars: 5,
    name: "Nicolas R/Panneaux solaires",
  },
];

const Temoignage = () => {
  const temoignage = useRef<HTMLFormElement>(null);

  return (
    <section className="bg-textSecondary">
      <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:py-32 py-20 flex-col justify-between items-center text-white">
        <h2 className="text-2xl font-bold">Témoignage client</h2>
        <p className="mt-7 w-4/6 text-center">
          Si vous désirez entendre un retour d'expérience direct de l'un de mes
          clients, n'hésitez pas à me contacter. Je vous mettrai en relation
          directement.
        </p>
        <div className="flex w-full md:flex-row flex-col justify-between mt-10">
          {cards.map((card, index) => (
            <div
              className="md:w-4/12 w-full flex flex-col items-center md:max-w-[32%] p-7 text-textSecondary bg-white rounded-md md:mt-0 mt-7"
              key={index}
            >
              <p className="text-center mt-4">{card.text}</p>
              <div className="flex justify-center items-center mt-4">
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
                <StarIcon className="h-5 w-5 text-yellow" />
              </div>
              <p className="mt-4 text-center">{card.name}</p>
              <div className="flex justify-center"></div>
            </div>
          ))}
        </div>
        <ButtonPhone value="En savoir plus" bgColor="white" textColor="text" />
      </div>
    </section>
  );
};

export default Temoignage;
