"use client";
import React, { useState, useEffect } from "react";
import { checkHealth } from "./check";

const Health = () => {
  const [apiData, setApiData] = useState(null);
  const API = process.env.NEXT_PUBLIC_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const health_url = `${API}/health`;
        const response = await fetch(health_url);

        if (response.ok) {
          const data = await response.json();
          const { API, aniwatch } = data;
          setApiData({ API, aniwatch });
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-24">
        <div className="flex justify-center h-screen">
          <div className="bg-black rounded-tl-12 rounded-tr-12 rounded-bl-4 rounded-br-4 w-[50%]">
            <div className="font-bold p-5 text-amber-100 text-4xl flex justify-center">
              System Status
            </div>
            <div className="text-sm flex justify-between border border-gray-300">
              <div className="w-60 border-r border-gray-300">
                <div className="p-3 text-xl m-3">
                  <div className="pl-2 item">API:</div>
                  <div className="pl-2 item">Aniwatch:</div>
                </div>
              </div>
              <div className="w-80 text-center text-xl">
                <div className="p-3 m-3">
                  {apiData && (
                  <div
                    className={`${
                      checkHealth(apiData.API.toString()) === "200 OK"
                        ? "pr-2 item text-grny"
                        : "pr-2 item text-saffron"
                    }`}
                  >
                    {checkHealth(apiData.API.toString())}
                  </div>)}
                  {apiData && (
                  <div
                    className={`${
                      checkHealth(apiData.aniwatch.toString()) === "200 OK"
                        ? "pr-2 item text-grny"
                        : "pr-2 item text-saffron"
                    }`}
                  >
                    {checkHealth(apiData.aniwatch.toString())}
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Health;
