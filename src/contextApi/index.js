import React from 'react';
import Container from '../components/container';
import { ThemeContext } from '../components/context';
import './style.scss';
function contextExample() {
    return <ThemeContext.Consumer>
        {
            ({ theme, toggleTheme }) => <Container theme={theme}>
                <button className="customButton" onClick={toggleTheme}>Toggle to {theme.bg === '#000000' ? `Light` : `Dark`}</button>
            </Container>
        }
    </ThemeContext.Consumer>
}
export default contextExample;