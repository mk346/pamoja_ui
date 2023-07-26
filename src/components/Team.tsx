import React from "react";

interface TeamCardProps {
    imageSrc: string;
    name: string;
    profession: string;
}

const Team = () => {
    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-4 text-6xl font-black text-orange-500 justify-center flex">
                The Team
              </span>

                            <p className="text-white text-[20px]">
                                Meet our team, a group of passionate individuals who work tirelessly to ensure you experience seamless connectivity and top-notch customer service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center -mx-4">
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Field Technician"
                        imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Customer Service"
                        imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                    />
                    <TeamCard
                        name="Austin"
                        profession="Smooth Operator"
                        imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, profession }) => {
    return (
        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg">
                    <img src={imageSrc} alt="" className="w-full" />
                    <div className="absolute left-0 w-full text-center bottom-5">
                        <div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg">
                            <h3 className="text-base font-semibold text-dark">{name}</h3>
                            <p className="text-sm text-body-color">{profession}</p>
                            <div>
                <span className="absolute bottom-0 left-0">
                  <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill="#13C296"
                        fillOpacity="0.11"
                    />
                  </svg>
                </span>
                                <span className="absolute top-0 right-0">
                  <svg
                      width={20}
                      height={25}
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* ... */}
                  </svg>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
