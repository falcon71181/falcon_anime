"use client";
import React, { useEffect, useRef } from 'react';
import ProfileHero from "@/components/ProfileHero";
import ProfileContacts from "@/components/ProfileContacts";
import TextScramble from '@/lib/TextScramble';

const WhoAmI = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const phrases = [
            "- ",
            "-----",
            "----------------",
            "-----------------------------------------",
            "-------------------------------------------------------------------",
            "--------------------------------------------------------------------------------------"
        ];

        const fx = new TextScramble(textRef.current);

        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 800);
            });
            counter = (counter + 1) % phrases.length;
        };

        next();
    }, []);
    
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
                    <div className="text-center" ref={textRef}></div>
                </div>
            </div>
        </div>
    );
};

export default WhoAmI;
