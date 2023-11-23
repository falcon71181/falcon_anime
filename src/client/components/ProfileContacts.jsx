import Image from "next/image";
import Link from "next/link";

const ProfileContacts = ({ className }) => {
    return (
        <ul className={className}>
            <li>
                <Link
                    className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
                    href="https://github.com/falcon71181"
                    target="_blank"
                >
                    <Image
                        className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
                        src="/socials/Github.png"
                        alt="Github"
                        width={30}
                        height={30}
                    />
                    <div className="pl-2 font-heading group-hover:text-saffron">GitHub</div>
                </Link>
            </li>
            <li>
                <Link
                    className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
                    href="https://www.instagram.com/falcon71181/"
                    target="_blank"
                >
                    <Image
                        className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
                        src="/socials/Instagram.png"
                        alt="Instagram"
                        width={30}
                        height={30}
                    />
                    <div className="pl-2 font-heading group-hover:text-saffron">Instagram</div>
                </Link>
            </li>
            <li>
                <Link
                    className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
                    href="https://www.linkedin.com/in/abhay-thakur-73470b287/"
                    target="_blank"
                >
                    <Image
                        className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
                        src="/socials/Linkedin.png"
                        alt="Linkedin"
                        width={30}
                        height={30}
                    />
                    <div className="pl-2 font-heading group-hover:text-saffron">LinkedIn</div>
                </Link>
            </li>
            <li>
                <Link
                    className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
                    href="mailto:falcon_clutch71@protonmail.com"
                    target="_blank"
                >
                    <Image
                        className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
                        src="/socials/Mail.png"
                        alt="Mail"
                        width={30}
                        height={30}
                    />
                    <div className="pl-2 font-heading group-hover:text-saffron">Mail</div>
                </Link>
            </li>
            <li>
                <Link
                    className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
                    href="https://twitter.com/elonmusk"
                    target="_blank"
                >
                    <Image
                        className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
                        src="/socials/Twitter.png"
                        alt="Twitter"
                        width={30}
                        height={30}
                    />
                    <div className="pl-2 font-heading group-hover:text-saffron">Twitter</div>
                </Link>
            </li>
            <li>
                <Link
                    className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
                    href="https://app.hackthebox.com/profile/673636"
                    target="_blank"
                >
                    <Image
                        className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
                        src="/socials/HTB.png"
                        alt="HTB"
                        width={30}
                        height={30}
                    />
                    <div className="pl-2 font-heading group-hover:text-saffron">HTB</div>
                </Link>
            </li>
        </ul>
    )
}

export default ProfileContacts;
