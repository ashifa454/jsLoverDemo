import React, { useState, useEffect } from 'react';

function PredefinedHook() {
    // const [] = useState();
    /**
     * @description Component Did Mount
     */
    useEffect(() => {
        /**
         * @description Component Will unmount
         */
        return () => {

        }
    }, [])
    /**
     * @description Component Did Update
     */
    useEffect(() => {

    })
    return <div>I am Predefined Hook</div>
}
export default PredefinedHook;