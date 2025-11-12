import React from "react";
import AuthForm from "./SubComponent/AuthForm";

const AuthSection = () => {
    return (
        <div className="w-full min-h-screen bg-indigo-900 flex justify-center items-center px-4 p-[100px]">
            {/* Main container */}
            <div className="w-full max-w-[900px] flex justify-between items-center
                      Laptop:flex-row Laptop:gap-10
                      Tablet:flex-col Tablet:gap-8
                      Mobile:flex-col Mobile:gap-6">

                {/* --- Left Content --- */}
                <div className="text-white flex-1 text-left Laptop:text-left Tablet:text-center Mobile:text-center">
                    <h1 className="text-5xl font-bold font-['DM_Sans'] leading-[52px] mb-6
                         Tablet:text-xl Tablet:leading-10
                         Mobile:text-xl Mobile:leading-8">
                        We solve digital problems with an outstanding creative flare
                    </h1>
                    <p className="text-base font-semibold font-['DM_Sans'] leading-6
                        Tablet:text-xm Mobile:text-xm Tablet:max-w-[600px] Mobile:max-w-[600px]">
                        We have created a new product that will help designers, developers
                        and companies create websites for their startups quickly and easily.
                    </p>
                </div>

                {/* --- Right Form Container --- */}
                <div className="flex justify-center items-center
                        Laptop:w-[470px] Laptop:h-[550px]
                        Tablet:w-[350px] Tablet:h-auto
                        Mobile:w-[90%] Mobile:h-auto">
                    <AuthForm />
                </div>

            </div>
        </div>
    );
};

export default AuthSection;
