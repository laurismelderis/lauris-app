import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  loading: boolean
}

const initialState: GlobalState = {
  loading: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loadingChanged: (state, { payload }) => {
      const { loading = false } = payload

      state.loading = payload
    },
  },
})

export const { loadingChanged } = globalSlice.actions

export default globalSlice.reducer
