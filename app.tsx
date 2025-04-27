import React, { useEffect } from "react";
import { ThemeProvider } from "./src/providers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import RootNavigation from "./src/navigation";

const App = (): React.JSX.Element => {

    useEffect(() => {
        SystemNavigationBar.setNavigationColor('translucent');
    }, [])

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <RootNavigation />
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App;