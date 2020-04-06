import React, { Component } from 'react';
import preset from '@rebass/preset';
import { ThemeProvider } from 'emotion-theming';

import ZoneItem from './components/ZoneItem';
import NavBar from './components/NavBar';

class App extends Component {
    
    constructor() {
        super();
    }

    render() {
        const theme = {
            ...preset,
        }
        return (
            <ThemeProvider theme={theme}>
                <NavBar />
                <ZoneItem />
            </ThemeProvider>
        )
    }
}
    

export default App;