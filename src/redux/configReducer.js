import {HIDE_CONFIG_MENU, SHOW_CONFIG_MENU, TOGGLE_COLOR_THEME} from "@/redux/types";

const initialState = {
    anchorEl: null,
    colorTheme: 'light'
}

export const configReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CONFIG_MENU:
            return {...state, anchorEl: action.payload}
        case HIDE_CONFIG_MENU:
            return {...state, anchorEl: null}

        case TOGGLE_COLOR_THEME:
            const theme = state.colorTheme === 'dark' ? 'light' : 'dark'
            return {...state, colorTheme: theme}

        default: return state
    }
}