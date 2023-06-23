interface PlanCardProps {
    name: string;
    description: string;
    btnText?: string;
    price?: string;
    features: string[];
    color: string;
}

export default function PlanCard({ name, description, price, features, color, btnText = "Start" }: PlanCardProps) {
    return (
        <div style={{ backgroundColor: color }} className="flex min-h-[300px] w-[200px] flex-col rounded-3xl p-8">
            <h2 className="mb-5 text-xl font-medium">{name}</h2>
            <div className="mb-5 flex items-end text-3xl font-black">
                {price ? (
                    <div>KES{price}</div>
                ) : (
                    <div>Free</div>

                )}
            </div>
            <p className="mb-5">{description}</p>
            <ul className="mb-10 flex flex-col gap-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white">
                {btnText}
            </button>
        </div>
    );
}
