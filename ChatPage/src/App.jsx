import React from 'react'
import ChatPage from './ChatPage'
import ThemeContext from './ThemeContext'
import Chats from './Chats'
import TextBar from './textBar'
import ProfileBar from './profileBar'
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