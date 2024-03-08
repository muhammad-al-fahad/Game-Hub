import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GameQuery } from "../../modal/FetchResponse";

interface setGenre {
    type: 'GENRE'
    genreId: number
}

interface setSearch {
    type: 'SEARCH'
    searchText: string
}

interface setPlatform {
    type: 'PLATFORM'
    platformId: number
}

interface setSortOrder {
    type: 'SORTING'
    sortOrder: string
}

type GameQueryStore = setGenre | setPlatform | setSearch | setSortOrder

const initialState: GameQuery = {
    genreId: undefined,
    platformId: undefined,
    sortOrder: undefined,
    searchText: undefined
}

const Game = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGameQuery: (state, action: PayloadAction<GameQueryStore>) => {
            switch (action.payload.type) {
                case 'GENRE':
                    return {
                        ...state,
                        genreId: action.payload.genreId
                    }
                case 'PLATFORM':
                    return {
                        ...state,
                        platformId: action.payload.platformId
                    }
                case 'SEARCH':
                    return {
                        ...state,
                        searchText: action.payload.searchText
                    }
                case 'SORTING':
                    return {
                        ...state,
                        sortOrder: action.payload.sortOrder
                    }
                default:
                    return state
            }
        }
    }
})

export const { setGameQuery } = Game.actions
export default Game.reducer