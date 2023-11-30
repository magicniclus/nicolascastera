import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface LittleCardsProps {
    value: string;
}

const LittleCards : React.FC<LittleCardsProps> = ({value}) => {
    return (
        <div className='flex mt-5 p-3 rounded-full bg-gray/50 max-w-max min-w-[270px] border border-gray'>
            <CheckCircleIcon className='h-5 w-5 text-yellow' />
            <p className='ml-3'>{value}</p>
        </div>
    );
};

export default LittleCards;