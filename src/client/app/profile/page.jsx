"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { isSessionIDValid } from "@/lib/IsSessionIDValid";

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
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    throw error;
  }
};

const MyProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenValidation = await isSessionIDValid();
        if (!tokenValidation.valid) {
          return router.push("/login");
        }
        const data = await fetchUserProfile();
        setProfileData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const username = profileData?.email.split("@")[0] || "";

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
                  <h1 class="font-semibold text-whote text-4xl">{username}</h1>
                  <p class="p-3 text-ston-300 text-xs group-hover:pt-5 transition-all duration-500 delay-200">
                    @{profileData.id}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-screen">
              <div className="bg-black rounded-tl-12 rounded-tr-12 rounded-bl-4 rounded-br-4 w-[50%]">
                <div className="font-bold p-5 text-amber-100 text-4xl flex justify-center">
                  Profile Data
                </div>
                <div className="text-sm border border-gray-300">
                  <table className="w-full">
                    <tbody className="border-2">
                      <tr>
                        <td className="w-60 border-r border-gray-300 p-3 text-xl">
                          <div className="pl-2 item text-white">Name:</div>
                          <div className="pl-2 item text-white">Email:</div>
                          <div className="pl-2 item text-white">ID:</div>
                          <div className="pl-2 item text-white">Joining Date:</div>
                        </td>
                        <td className="text-center text-xl p-3">
                          <div className="pl-2 item text-base">{username}</div>
                          <div className="pl-2 item text-base">
                            {profileData.email}
                          </div>
                          <div className="pl-2 item text-base">
                            @{profileData.id}
                          </div>
                          <div className="pl-2 item text-base">
                            {profileData.date}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;
