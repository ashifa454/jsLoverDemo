import React, { useState, useEffect } from 'react';
import Container from '../components/container';
import './style.scss';

function PredefinedHook(props) {
    const [width, setWidth] = useState(window.innerWidth);
    /**
     * @description Component Did Mount
     */
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        /**
         * @description Component Will unmount
         */
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize, false);
        }
    }, [])
    /**
     * @description Component Did Update && Should Component Update
     */
    useEffect(() => {

    })
    return <Container>Width : {width}</Container>
}
export default PredefinedHook;