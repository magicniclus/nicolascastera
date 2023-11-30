import React from 'react';
import Logos from './logos';

// Définir l'interface pour un élément de data
interface DataItem {
    title: string;
    img: string;
    text: string;
}

interface Props {
    data: DataItem[]; // data est un tableau d'objets de type DataItem
}

const LogoContainer : React.FC<Props> = ({data}) => {
    return (
        <section>
            <div className='mx-auto flex max-w-5xl px-6 lg:pb-32 pb-20 pt-14 lg:px-8 flex-col justify-center items-center text-text'>
                <h2 className="text-2xl font-bold text-center">Une maitrise total de l'ensemble des outils Google</h2>
                <div className='flex flex-row flex-wrap'>
                    {
                        data && data.map((item: any, index: number) => (
                            <Logos key={index} title={item.title} img={item.img} text={item.text} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default LogoContainer;