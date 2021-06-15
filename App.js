import React from 'react'
import Navigation from './src/Routes/Navigation'
 
import { Provider } from 'react-redux'
import store from './src/Redux/Store'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
