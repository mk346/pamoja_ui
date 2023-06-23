import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className='flex flex-col justify-center items-center bg-white'>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">FREQUENTLY ASKED QUESTIONS</h1>
            <AccordionLayout
                title="How much is the installation fee?"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 1 Content
            </AccordionLayout>

            <AccordionLayout
                title="Where are your offices located?"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 2 Content
            </AccordionLayout>

            <AccordionLayout
                title="Is there network coverage where i'm located?"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 1 Content
            </AccordionLayout>


            <AccordionLayout
                title="Accordion 1"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 1 Content
            </AccordionLayout>
        </div>
    );
};
export default Accordion;
