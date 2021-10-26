const defaultState = {
    anchorMenu: null,
    lightMode: true,

}

const SET_ANCHOR_MENU = "SET_ANCHOR_MENU"
const TOGGLE_LIGHTNING = "TOGGLE_LIGHTNING"

export const configReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ANCHOR_MENU":
            return {...state, anchorMenu: action.payload}

        case "TOGGLE_LIGHTNING":
            return {...state, lightMode: !state.lightMode}

        default:
            return state
    }
}

export const setMenuAnchorAction = (payload) => ({type: SET_ANCHOR_MENU, payload: payload})
export const toggleLightModeAction = () => ({type: TOGGLE_LIGHTNING})