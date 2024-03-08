import { configureStore } from '@reduxjs/toolkit';
import Game from './reducer'

const store = configureStore({
    reducer: {
        gameQuery: Game
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;