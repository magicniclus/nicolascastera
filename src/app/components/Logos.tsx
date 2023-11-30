import React from 'react';

interface Props {
    title: string;
    img: string;
    text: string
}

const Logos: React.FC<Props> = ({title, img, text}) => {
    return (
        <div className="md:w-5/12 w-full flex justify-center items-center flex-col mt-12 bg-gray rounded-lg p-5">
            <div className='flex items-center justify-around lg:flex-row flex-col'>
                <img src={img} className="max-h-[500px] h-auto" alt="Image Description" />
                <h3 className='md:text-4xl text-2xl font-semibold text-textSecondary ml-5'>{title}</h3>
            </div>
            <p className='text-center mt-5 text-text'>{text}</p>
        </div>
    );
};

export default Logos;