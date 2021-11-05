import {HIDE_CONFIG_MENU, SHOW_CONFIG_MENU, TOGGLE_COLOR_THEME} from "@/redux/types";

export function showConfigMenu(anchorElement) {
    return {
        type: SHOW_CONFIG_MENU,
        payload: anchorElement
    }
}

export function hideConfigMenu() {
    return {
        type: HIDE_CONFIG_MENU
    }
}

export function toggleLightTheme() {
    return {
        type: TOGGLE_COLOR_THEME
    }
}
