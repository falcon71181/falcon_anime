"use client"
import React, { useState, useEffect } from 'react';
import { checkHealth } from './check';

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
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='pt-24'>
      <h1 className='text-amber-100 text-4xl flex items-center justify-center'>System Status</h1>
      {apiData && (
        <div>
          <ul className='text-xl'>
            <li>API: {checkHealth(apiData.API.toString())}</li>
            <li>aniwatch: {checkHealth(apiData.aniwatch.toString())}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Health;
