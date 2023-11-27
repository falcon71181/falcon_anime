"use client";

import React, { useState, useEffect } from 'react';

const fetchUserProfile = async () => {
    try {
      const response = await fetch("http://localhost:3001/profile", {
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
      console.log(data);
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
          // Handle the error
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="min-h-screen pt-28 px-10">
        {loading ? (
          <p className="text-5xl font-bold">Loading...</p>
        ) : (
          <>
            <h1 className="text-5xl font-bold">Welcome,</h1>
            {/* Render other profile information */}
          </>
        )}
      </div>
    );
  };
  
  export default MyProfile;
  