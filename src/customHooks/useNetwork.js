import React, { useState, useEffect } from 'react';

const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
function useNetwork() {
    const [network, setNetwork] = useState(connection.effectiveType);
    const handleNetworkChange = (e) => {
        setNetwork(e.target.effectiveType)
    }
    const handleOnlineStatus = () => {
        setNetwork(navigator.onLine ? 'Online' : 'Offline')
    }
    useEffect(() => {
        connection.addEventListener('change', handleNetworkChange);
        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);
        return () => {
            connection.removeEventListener('change', handleNetworkChange, false);
            window.removeEventListener('online', handleOnlineStatus, false);
            window.removeEventListener('offline', handleOnlineStatus, false);
        }
    }, []);
    return network;
}
export default useNetwork;