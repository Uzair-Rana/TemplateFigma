// src/Components/Features.jsx
import rectangleImage from "../assets/Rectangle.png"; // Background image
import mockupImage from "../assets/Group 2.png"; // Mockup image from assets
import Card from "./SubComponent/Cards.jsx";

export default function Features() {
    return (
        <div className="relative inset-0 bg-[#2F1893]">

            {/* Additional Section to match the detailed code */}
            <div className="w-[1400px] h-[736px] relative bg-indigo-900 overflow-hidden">
                {/* Background Image */}
                <img className="w-[1400px] h-[736px] left-0 top-0 absolute" src={rectangleImage} alt="Background" />

                {/* Mockup Image */}
                <img className="w-[983.30px] h-[535.77px] left-[-501.74px] top-[100px] absolute" src={mockupImage} alt="Mockup" />

                {/* Overlay (transparent) */}
                <div className="w-[983.30px] h-[535.77px] left-[-501.74px] top-[100px] absolute bg-black/0" />

                {/* Text Sections */}
                <div className="w-64 left-[816px] top-[500.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                    Samples will show you the feeling on how to play around using the components.
                </div>
                <div className="left-[816px] top-[458.20px] absolute justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest">
                    Useful Symbol Components
                </div>
                <div className="w-11 h-9 left-[815px] top-[391.60px] absolute justify-start text-white text-4xl font-normal font-['FontAwesome']">
                     {/* Icon */}
                </div>

                <div className="w-64 left-[516px] top-[500.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6">
                    Startup Framework contains components and complex blocks which can easily.
                </div>
                <div className="left-[516px] top-[458.20px] absolute justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest">
                    30 New feature pages
                </div>
                <div className="w-9 h-9 left-[515px] top-[391.60px] absolute justify-start text-white text-4xl font-normal font-['FontAwesome']">
                     {/* Icon */}
                </div>

                {/* Description Text */}
                <div className="w-[600px] left-[515px] top-[230px] absolute justify-start text-white text-xl font-medium font-['DM_Sans'] leading-8">
                    We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
                </div>

                {/* Main Title */}
                <div className="left-[515px] top-[158px] absolute justify-start text-white text-5xl font-bold font-['DM_Sans'] leading-[52px]">
                    We Create Something New
                </div>

                {/* Vertical Dots */}
                <div className="w-24 h-2.5 left-[1285px] top-[323px] absolute origin-top-left rotate-90 overflow-hidden">
                    <div className="w-2.5 h-2.5 left-[1px] top-[80px] absolute opacity-30 justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9">
                        
                    </div>
                    <div className="w-2.5 h-2.5 left-[1px] top-[60px] absolute opacity-30 justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9">
                        
                    </div>
                    <div className="w-2.5 h-2.5 left-[1px] top-[40px] absolute opacity-30 justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9">
                        
                    </div>
                    <div className="w-2.5 h-2.5 left-[1px] top-[20px] absolute opacity-30 justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9">
                        
                    </div>
                    <div className="w-2.5 h-2.5 left-[1px] top-0 absolute justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
