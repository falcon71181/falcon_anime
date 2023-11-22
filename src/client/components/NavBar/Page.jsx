"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-black text-white font-heading h-16 w-[100vw] fixed flex justify-between items-center">
      <Link href="/home">
        <div className="ml-32 mr-32 font-bold uppercase text-2xl text-saffron">
          F x Ani-Watch
        </div>
      </Link>
      <ul className=" ml-32 mr-32 flex p-5 gap-5 text-stone-300 text-base">
        <li>
          <Link className={`${pathname === '/home' ? 'text-grny hover:text-grny' : 'text-stone-300 hover:text-saffron'}`} href="/home">Home</Link>
        </li>
        <li>
          <Link className={`${pathname === '/movie' ? 'text-grny hover:text-grny' : 'text-stone-300 hover:text-saffron'}`} href="/movie">Movies</Link>
        </li>
        <li>
          <Link className={`${pathname === '/genres' ? 'text-grny hover:text-grny' : 'text-stone-300 hover:text-saffron'}`} href="/genres">Genres</Link>
        </li>
        <li>
          <Link className={`${pathname === '/whoami' ? 'text-grny hover:text-grny' : 'text-stone-300 hover:text-saffron'}`} href="/whoami">WhoAmI</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;