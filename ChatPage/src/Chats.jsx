import React, { Profiler, useContext } from 'react'
import { ThemeStore } from './ThemeContext';
import ProfileBar from './profileBar';
import TextBar from './textBar';
const Chats = ({ activeUser, setActiveUser, messages, setMessages, input, setInput }) => {
    let { theme, setTheme } = useContext(ThemeStore)
    return (
        <div className={`w-3/4 flex flex-col ${theme == 'dark' ? 'bg-black' : 'bg-gray-100'}`}>
            <ProfileBar activeUser={activeUser} key={activeUser.id}></ProfileBar>
            <div className={`flex-1  ${theme == 'dark' ? 'bg-gray-900' : 'bg-gray-200'} p-4 rounded-lg overflow-y-auto`}>
                {
                    (messages[activeUser.id] || []).map((msg, ind) => (
                        <div key={ind} className={` flex ${msg.sender == 'You' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`mb-2 h-[9vh] items-center rounded-xl pt-2 p-1.5 max-w-[50%] break-words ${msg.sender == 'You' ? ' bg-blue-400' : 'bg-gray-600'}`}>{msg.text}
                                <div className='text-gray-200 pt-0.5 text-[9px] text-right'>{msg.timeStamp}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <TextBar messages={messages} setMessages={setMessages} input={input} setInput={setInput} activeUser={activeUser}></TextBar>
        </div>
    )
}

export default Chats