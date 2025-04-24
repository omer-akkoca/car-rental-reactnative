import React, { useEffect } from "react";
import { ThemeProvider } from "./src/providers";
import { Onboarding } from "./src/pages";
import SystemNavigationBar from 'react-native-system-navigation-bar';

const App = (): React.JSX.Element => {

    useEffect(() => {
        SystemNavigationBar.setNavigationColor('translucent');
    }, [])

    return(
        <ThemeProvider>
            <Onboarding/>
        </ThemeProvider>
    )
}

export default App;