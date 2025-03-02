import React, { use, useContext } from 'react'
import { useState } from 'react'
import Chats from './Chats.jsx';
import ThemeContext, { ThemeStore } from './ThemeContext.jsx';
const users = [
  { id: 1, name: 'Person 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111' },
  { id: 2, name: 'Person 2' },
  { id: 3, name: 'Person 3' },
  { id: 4, name: 'Person 3' },
  { id: 5, name: 'Person 3' },
  { id: 6, name: 'Person 3' },
  { id: 7, name: 'Person 3' },
  { id: 8, name: 'Person 3' },
  { id: 9, name: 'Person 3' },
  { id: 10, name: 'Person 3' },
  { id: 11, name: 'Person 3' },
  { id: 12, name: 'Person 3' },
  { id: 13, name: 'Person 3' },
  { id: 14, name: 'Person 3' },
  { id: 15, name: 'Person 3' },
  { id: 16, name: 'Person 3' },
  { id: 17, name: 'Person 3' }
];
const ChatPage = () => {
  let { theme, setTheme } = useContext(ThemeStore)
  const [messages, setMessages] = useState({})
  const [input, setInput] = useState('')
  const [activeUser, setActiveUser] = useState(users[0]);

  return (
    <div className='flex h-screen'>
      <div className='w-1/4 flex-col h-full overflow-y-auto'>
        <div className={`sticky top-0 z-10 flex justify-center ${theme == 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
          <h2 className={`font-bold text-xl ${theme == 'dark' ? 'text-white' : 'text-black'}`}>Messages</h2>
        </div>
        <div className={`flex-col p-2 ${theme == 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`}>

          {users.map((user, ind) => (

            <div
              key={ind}
              className={`flex items-center gap-3 mb-1 rounded-xl p-1 ${activeUser == user ? 'bg-blue-400' : ''}`}
              onClick={() => setActiveUser(user)}
            >
              <div className="avatar">
                <div className="rounded-3xl h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div className={`pl-2 max-w-[80%] break-words ${theme == 'dark' ? 'text-white' : 'text-black'}`}>
                {user.name.length > 20 ? `${user.name.slice(0, 18)}. . .` : `${user.name}`}
                <div className="text-sm opacity-50">Recent Message</div>
              </div>
            </div>
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