import React from "react";
import { ThemeProvider } from "./src/providers";
import { Onboarding } from "./src/pages";

const App = (): React.JSX.Element => {
    return(
        <ThemeProvider>
            <Onboarding/>
        </ThemeProvider>
    )
}

export default App;