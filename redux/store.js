
import { themeReducer } from '@/redux/reducer/theme'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})


