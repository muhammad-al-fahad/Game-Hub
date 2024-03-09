import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Menu {
    type: 'TOGGLE'
    navMenu: boolean
    navSearch: boolean
}

const Game = createSlice({
    name: 'games',
    initialState: {
        menu: false,
        search: false
    },
    reducers: {
        setToggle: (state, action: PayloadAction<Menu>) => {
            switch (action.payload.type) {
                case 'TOGGLE':
                    return {
                        ...state,
                        menu: action.payload.navMenu,
                        search: action.payload.navSearch
                    }
                default:
                    return state
            }
        },
    }
})

export const { setToggle } = Game.actions
export default Game.reducer