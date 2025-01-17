import global from '../assets/global.jpg';


const Cctv = () => {
    return (
        <>
            <section
                className="overflow-hidden bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${global})`,
                    height: '450px',
                    width: '100%',}}
            >
                <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Contact Us
                        </h2>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Cctv;

