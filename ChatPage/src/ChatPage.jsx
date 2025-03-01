import React, { useContext } from 'react'
import { useState } from 'react'
import Chats from './Chats.jsx';
import ThemeContext, { ThemeStore } from './ThemeContext.jsx';
const users = [
  { id: 1, name: 'Person 1' },
  { id: 2, name: 'Person 2' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' },
  { id: 3, name: 'Person 3' }
];
const ChatPage = () => {
  let { theme, setTheme } = useContext(ThemeStore)
  const [messages, setMessages] = useState({})
  const [input, setInput] = useState('')
  const [activeUser, setActiveUser] = useState(users[0]);

  return (
    <div className='flex h-screen'>
      <div className='w-1/4 flex-col h-full overflow-y-auto'>
        <div className={`sticky top-0 flex justify-center ${theme == 'dark' ? 'bg-black' : 'bg-gray-200'}`}>
          <h2 className={`font-bold text-xl ${theme == 'dark' ? 'text-white' : 'text-black'}`}>Messages</h2>
        </div>
        <div className={`flex-col p-2 ${theme == 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`}>

          {users.map((user, ind) => (
            <div
              key={user.id}
              className={`p-3 cursor-pointer flex justify-center mb-1 rounded-2xl text-black ${theme == 'dark' ? '' : 'text-black'} ${activeUser === user ? 'bg-blue-400' : `${ind % 2 == 0 ? 'bg-gray-300' : 'bg-white'}`}`}
              onClick={() => setActiveUser(user)}
            > {user.name}</div>
          )
          )
          }
        </div>
      </div>
      <Chats activeUser={activeUser} setActiveUser={setActiveUser} messages={messages} setMessages={setMessages} input={input} setInput={setInput} users={users} />
    </div>
  )
}
export default ChatPage