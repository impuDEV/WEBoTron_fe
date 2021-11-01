import React, {useContext, useState} from 'react'

const ConfigContext = React.createContext()

export const useConfig = () => {
    return useContext(ConfigContext)
}

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState({testOpt: true, lightMode: 'light'})

    const toggleThemeLight = () => setConfig(prevState => {
        return{...prevState, lightMode: prevState.lightMode === 'dark' ? 'light' : 'dark'}
    })

    return (
        <ConfigContext.Provider value={{
            options: config,
            toggleThemeLight
        }}>
            {children}
        </ConfigContext.Provider>
    )
}