import React, { useEffect, useState } from 'react';
import useNetwork from './useNetwork';

function CustomHook() {
    const network = useNetwork();
    return <div className="itemContainer">{network}</div>;
}
export default CustomHook;