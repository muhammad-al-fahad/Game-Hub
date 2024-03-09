import { configureStore } from '@reduxjs/toolkit';
import Game from './reducer'
import showGenre from './reducer/toggle'

const store = configureStore({
    reducer: {
        showNav: showGenre,
        gameQuery: Game
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;