import React, { useEffect, useState } from 'react';

function CustomHook() {
    const [network, setNetwork] = useState('not connected');
    /**
     * @description
     */
    useEffect(() => {
        return () => {

        }
    });
    useEffect(() => {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            setNetwork(connection.type);
        }
    }, []);
return <div>{network}</div>
}
export default CustomHook;