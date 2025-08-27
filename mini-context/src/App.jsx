import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  

  return (
    <UserContextProvider>
      <h2>This is app to learn about Context API</h2>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
