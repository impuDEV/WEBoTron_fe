import React, {useContext, useReducer} from 'react'

const ConfigContext = React.createContext()

export const useConfig = () => {
    return useContext(ConfigContext)
}

const THEME_LIGHT = 'lightTheme'
const THEME_DARK = 'darkTheme'


const reducer = (state, action) => {
    switch (action.type) {
        case THEME_LIGHT:
            return{...state, colorTheme: 'light'}
        case THEME_DARK:
            return{...state, colorTheme: 'dark'}
        default: return state
    }
}

export const ConfigProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {
        colorTheme: 'light'
    })

    const setLightTheme = () => dispatch({ type: THEME_LIGHT })
    const setDarkTheme = () => dispatch({ type: THEME_DARK })

    return (
        <ConfigContext.Provider value={{
            colorTheme: state.colorTheme,
            setLightTheme,
            setDarkTheme,
        }}>
            {children}
        </ConfigContext.Provider>
    )
}