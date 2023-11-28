"use client";

import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

const fetchUserProfile = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        // Any other options...
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
      throw error;
    }
  };
  
  const MyProfile = () => {
    // const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchUserProfile();
        //   setProfileData(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
          <div className="min-h-screen pt-28 px-10">
            <h1 className="text-5xl font-bold">Welcome,</h1>
            {/* Render other profile information */}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default MyProfile;
  