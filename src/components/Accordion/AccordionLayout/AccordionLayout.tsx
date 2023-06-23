import React from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

interface AccordionLayoutProps {
    title: string;
    children: React.ReactNode;
    index: number;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }: AccordionLayoutProps) => {
    const handleSetIndex = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <>
            <div onClick={() => handleSetIndex(index)} className='flex w-1/2 justify-between p-2 mt-2 rounded bg-orange-500 animation'>
                <div className='flex'>
                    <div className='text-white font-bold'>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {activeIndex === index ? (
                        <BsFillArrowDownCircleFill className='w-8 h-8' />
                    ) : (
                        <BsFillArrowUpCircleFill className='w-8 h-8' />
                    )}
                </div>
            </div>

            {activeIndex === index && (
                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
                    {children}
                </div>
            )}
        </>
    );
};

export default AccordionLayout;

