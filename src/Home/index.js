import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Menu=[
    {
        label: 'Class based Component',
        link: '/classBasedComponent'
    },
    {
        label: 'Functional Component',
        link: '/functionalComponent'
    },
    {
        label: 'Predefined Hooks',
        link: '/predefinedHook'
    },
    {
        label: 'Custom Hooks',
        link: '/customHook'
    },
    {
        label: 'Context Api',
        link: '/contextApi'
    }
]
function Home() {
    return <div className="menuContainer">
        <ul>
            {
                Menu.map((item) => <Link className="menuItem" to={item.link}>{item.label}</Link>)
            }
        </ul>
    </div>
}
export default Home;