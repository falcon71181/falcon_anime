'use client'

import Image from "next/image";

const ProfileHero = ({ className }) => {
    const handleClick = (_content) => {
        // TODO: Complete rest
        // setModalOpen(true);
        // setModalComponent(_content);
    }

    return (
        <div className={className}>
            <div className="relative p-10 border-2 border-dashed rounded-full group animate-rotate-reverse border-spacing-4 border-gray-400/50">
                <button
                    className="animate-rotate left-[45px] top-0 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
                    onClick={() => handleClick(1)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/React.png"
                        alt="ReactJS"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="animate-rotate right-[65px] -top-[8px] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
                    onClick={() => handleClick(2)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/Python.png"
                        alt="Python"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer -left-5 top-24 animate-rotate border-gray-400/50 active:scale-95 hover:scale-95"
                    onClick={() => handleClick(3)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/Tailwind.png"
                        alt="TailwindCSS"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer animate-rotate -right-4 top-20 border-gray-400/50 active:scale-95 hover:scale-95"
                    onClick={() => handleClick(4)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/Java.png"
                        alt="Java"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer left-4 bottom-8 animate-rotate border-gray-400/50 active:scale-95 hover:scale-95"
                    onClick={() => handleClick(5)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/JavaScript.png"
                        alt="JavaScript"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer right-1 animate-rotate bottom-10 border-gray-400/50 active:scale-95 hover:scale-95"
                    onClick={() => handleClick(6)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/C++.png"
                        alt="C++"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="animate-rotate right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
                    onClick={() => handleClick(7)}
                >
                    <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/skills/Nodejs.png"
                        alt="Nodejs"
                        width={40}
                        height={40}
                    />
                </button>

                <button
                    className="animate-rotate w-[200px] h-[200px] p-1 border-4 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0"
                    onClick={() => handleClick(0)}
                >
                    <div className="w-full h-full rounded-full active:scale-95 hover:border-gray-400 border-2 bg-[url('/pp.png')] bg-cover transition-all duration-500" />
                </button>
            </div>
        </div>
    )
}

export default ProfileHero;
