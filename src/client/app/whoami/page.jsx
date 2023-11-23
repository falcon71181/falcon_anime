import React from "react";
import ProfileHero from "@/components/ProfileHero";
import ProfileContacts from "@/components/ProfileContacts";

const WhoAmI = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 h-[100%] pt-10 text-white">
            <div className="mt-20 flex flex-col items-center justify-center flex-1 h-[100%]">
                <ProfileHero className='relative p-8' />

                <div className="whoami_name font-extrabold text-2xl font-montserrat text-profile_name mt-5">
                    ABHAY THAKUR
                </div>

                <ProfileContacts className='whoami_socials flex flex-row justify-between p-2' />

                <div className="font-sub_title text-slate-300 mt-1">
                    I'm a third-year college student currently pursuing my bachelor's degree in <strong className="text-white">Computer Science</strong>.
                </div>
            </div>
        </div>
    );
};

export default WhoAmI;
