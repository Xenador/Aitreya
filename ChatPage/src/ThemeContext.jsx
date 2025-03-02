import React, { useState } from 'react'
import { createContext } from 'react'

export let ThemeStore = createContext(null)

const ThemeContext = ({ children }) => {
    let [theme, setTheme] = useState(localStorage.getItem("Theme"))
    return (
        <ThemeStore.Provider value={{ theme, setTheme }}> {/*these values will go to the theme vaiable which is acting as the store for context api*/}
            {children} {/*all the components inside this theme provider component shall be used as an children than the those components shall be rerendered according to the change in the state of the theme */}
        </ThemeStore.Provider>
    )
}

export default ThemeContext