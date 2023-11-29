"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";

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
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
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
            <div class="flex relative items-center justify-center w-full">
              <div class="rounded-full overflow-hidden relative text-center p-8 group items-center flex flex-col max-w-sm hover: transition-all duration-500 shadow-lg shadow-saffron">
                <div class="text-gray-500 group-hover:scale-105 transition-all">
                  <svg
                    class="w-26 h-24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
                <div class="group-hover:p-3 transition-all duration-500 delay-200">
                  <h1 class="font-semibold text-whote text-4xl">User Name</h1>
                  <p class="text-ston-300 text-sm">@user</p>
                </div>
              </div>
            </div>
            {/* Render other profile information */}
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;
