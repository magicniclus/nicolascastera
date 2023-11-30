import React from 'react';

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
    disabled?: boolean;
    type?: "submit" | "button" | "reset" | undefined;
    id?: string;
}

const ButtonForm : React.FC<ButtonPhoneProps> = ({ value = 'Envoyer', bgColor = "textSecondary", textColor = "white" , disabled= true, type="submit", id}) => {

    return (
        <button id={id} type={type} disabled={disabled} className={`py-3 lg:px-5 px-3 rounded-lg bg-${bgColor} text-${textColor} flex mt-10 min-w-[150px] justify-center items-center hover:transition-all hover:duration-100 hover:ease-in-out ${disabled ? "opacity-80": "opacity-100 hover:shadow-lg"}`}>
            <div className='flex'>
                {value}
            </div>
        </button>
    );
};

export default ButtonForm;