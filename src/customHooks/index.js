import React from 'react';
import Container from '../components/container';
import useNetwork from './useNetwork';

function CustomHook() {
    const network = useNetwork();
    return <Container>
                <h3>Custom Hook </h3>
        Current Network Type {network}</Container>;
}
export default CustomHook;