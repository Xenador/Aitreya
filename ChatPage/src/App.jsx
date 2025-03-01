import React from 'react'
import ChatPage from './ChatPage'
import ThemeContext from './ThemeContext'
const App = () => {
  return (
    <>
    <ThemeContext>
    <ChatPage></ChatPage>
    </ThemeContext>
    </>
  )
}

export default App