import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
    loading: false,
    isLogged: false,
    token: null,
    user: null,
    error: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload.login;
    },
    setLogout: (state) => {
      state.login = null;
      state.isLogged = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsLogged: (state, action) => {
      state.login = action.payload.login;
      state.isLogged = action.payload.loggedIn;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

//actions
export const { setLogin, setLogout, setLoading, setIsLogged, setError } =
loginSlice.actions;

//selectlogin grabs the login data

// export const RegisterUser = (inputData) => async (dispatch) => {
//   console.log(inputData);
//   // dispatch(setIsLogged({ login: "data", loggedIn: true }));
//   try {
//     dispatch(setLoading(true));
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       `http://web01.exits.in:5002/api/auth/signup`,
//       {
//         username: inputData.username,
//         email: inputData.email,
//         name: inputData.name,
//         password: inputData.password,
//         role: inputData.role,
//       },
//       config
//     );

//     console.log(data);

//     if (data.success) {
//       dispatch(setIsLogged({ login: data, loggedIn: data.success }));
//     } else {
//       dispatch(setError({ error: "something went wrong please try again" }));
//     }

//     // console.log(data);
//     dispatch(setLoading(false));
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.data)
//       dispatch(setError(error.response.data));
//     } else {
//       dispatch(setError(error.message));
//     }
//     dispatch(setLoading(false));
//   }
// };

// export const loginUser = (inputData) => async (dispatch) => {
//   console.log(inputData);
//   // dispatch(setIsLogged({ login: "data", loggedIn: true }));
//   try {
//     dispatch(setLoading(true));
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       `http://web01.exits.in:5002/api/auth/signin`,
//       { username: inputData.username, password: inputData.password },
//       config
//     );

//     // console.log(data);

//     if (data.success) {
//       dispatch(setIsLogged({ login: data, loggedIn: data.success }));
//     } else {
//       dispatch(setError({ error: "something went wrong please try again" }));
//     }

//     // console.log(data);
//     dispatch(setLoading(false));
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.data)
//       dispatch(setError(error.response.data));
//     } else {
//       dispatch(setError(error.message));
//     }
//     dispatch(setLoading(false));
//   }
// };

export default loginSlice.reducer;
