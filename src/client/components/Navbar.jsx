'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from 'react';
import { isSessionIDValid } from "@/lib/IsSessionIDValid";

const Navbar = () => {
  const pathname = usePathname();
  const [isValidSession, setIsValidSession] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await isSessionIDValid();
        setIsValidSession(data.valid);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
        {isValidSession ? (
          // Display user's profile name if session is valid
          <li className="text-stone-300">MyProfile</li>
        ) : (
          // Display "Login / Register" button if session is not valid
          <li>
            <Link href='/login'>
              <button
                className={`${pathname === '/login'
                  ? 'border-2 border-saffron'
                  : 'bg-teal-900 border-none'
                  } 
                        outline-none inline-flex items-center justify-between min-w-200 rounded-md shadow-md box-border px-3 py-3 text-white text-xs font-semibold tracking-wider uppercase overflow-hidden cursor-pointer hover:opacity-95 hover:text-stone-200`}
              >
                <i className="login_animation text-bold"></i>Login / Register<i className="login_animation"></i>
              </button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
