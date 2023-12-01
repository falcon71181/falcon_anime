"use client";

import React, { useState, useEffect } from 'react';
import LoginForm from "@/components/LoginForm";
import { isSessionIDValid } from "@/lib/IsSessionIDValid";
import { useRouter } from 'next/navigation';

const Login = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await isSessionIDValid();
        if (data.valid === true) {
          // Perform client-side redirect
          router.push('/profile');
        }
      } catch (error) {
        console.error("Error fetching data:", error);

        // Handle errors (e.g., show an error message to the user)
      } finally {
        setIsDataFetched(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='min-h-screen pt-28 px-10'>
      <h1 className='text-5xl font-bold'>Member</h1>
      {isDataFetched && <LoginForm />}
    </div>
  );
};

export default Login;
