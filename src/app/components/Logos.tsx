import React from 'react';

interface Props {
    title: string;
    img: string;
    text: string
}

const Logos: React.FC<Props> = ({title, img, text}) => {
    return (
        <div className="w-5/12 flex justify-center items-center md:mt-0 mt-12">
            <h3>{title}</h3>
            <div className='flex flex-wrap'>
                <img src={img} className="max-h-[500px] h-auto" alt="Image Description" />
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Logos;