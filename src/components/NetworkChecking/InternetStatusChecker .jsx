import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import nointernent from '../../assets/images/nointernet.png'

const InternetStatusChecker = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {online ? (
        // Internet connection is available, load your website content here
        <Home/>
      ) : (
        // No internet connection, display a message or an offline page
        // <h1>No Internet Connection</h1>
        <img src={nointernent} alt="" style={{width:"100%"}}/>
      )}
    </div>
  );
}

export default InternetStatusChecker;
