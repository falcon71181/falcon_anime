'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='absolute w-full flex justify-between items-center px-3 py-6'>
            <Link href='/'>
                <h1 className='uppercase font-bold text-2xl text-saffron'>F x Ani-Watch</h1>
            </Link>

            <ul className='flex items-center gap-7'>
                <li><SearchBar></SearchBar></li>
                <li>
                    <Link
                        href='/'
                        className={`${pathname === '/'
                            ? 'text-grny'
                            : 'text-stone-300'
                            } 
                            hover:text-saffron`
                        }
                    >Home</Link>
                </li>
                <li>
                    <Link
                        href='/movie'
                        className={`${pathname === '/movie'
                            ? 'text-grny'
                            : 'text-stone-300'
                            } 
                            hover:text-saffron`
                        }
                    >Movie</Link>
                </li>
                <li>
                    <Link
                        href='/genre'
                        className={`${pathname === '/genre'
                            ? 'text-grny'
                            : 'text-stone-300'
                            } 
                            hover:text-saffron`
                        }
                    >Genre</Link>
                </li>
                <li>
                    <Link
                        href='/whoami'
                        className={`${pathname === '/whoami'
                            ? 'text-grny'
                            : 'text-stone-300'
                            } 
                            hover:text-saffron`
                        }
                    >WhoAmI</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
