import React, { useEffect } from "react";
import { ThemeProvider } from "./src/providers";
import { CarList } from "./src/pages";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = (): React.JSX.Element => {

    useEffect(() => {
        SystemNavigationBar.setNavigationColor('translucent');
    }, [])

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <CarList />
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App;