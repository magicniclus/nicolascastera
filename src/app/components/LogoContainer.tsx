import React from "react";
import Logos from "./Logos";

// Définir l'interface pour un élément de data
interface DataItem {
  title: string;
  img: string;
  text: string;
}

interface Props {
  data: DataItem[]; // data est un tableau d'objets de type DataItem
}

const LogoContainer: React.FC<Props> = ({ data }) => {
  return (
    <section>
      <div className="mx-auto flex max-w-5xl  p-6 lg:px-8 lg:py-32 py-20 flex-col justify-center items-center text-text">
        <h2 className="text-2xl font-bold text-center mb-5">
          Une maitrise total de l'ensemble des outils Google
        </h2>
        <div className="flex flex-wrap justify-around">
          {data &&
            data.map((item: any, index: number) => (
              <Logos
                key={index}
                title={item.title}
                img={item.img}
                text={item.text}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default LogoContainer;
