import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  loading: boolean;
  error: string | null;
  data: any | null;
}


interface UserLogin {
  username: string,
  password: string
}

const initialState: LoginState = {
  loading: false,
  error: null,
  data:null,
} 

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.loading = true
    },
    fetchSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    }, 
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    }
  }
})

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions

export const fetchToken = (user: UserLogin) => async (dispatch) => {
  try {
    dispatch(fetchStarted());

    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })

    const data = await response.json();
    
    console.log("🚀 ~ fetchToken ~ data:", data)

    dispatch(fetchSuccess(data))
  }catch(err) {
    const error = 'Errow';
    dispatch(fetchError(error))
  }
} 

export default slice.reducer; 