import React, { useContext, useState } from 'react'
import ThemeContext, { ThemeStore } from './ThemeContext';
import EmojiPicker from 'emoji-picker-react';
const TextBar = ({ messages, setMessages, input, setInput, activeUser }) => {
    let [showEmojiPicker, setShowEmojiPicker] = useState(false);
    let { theme, setTheme } = useContext(ThemeStore)
    let sendMessage = () => {
        if (input.trim() == '') return;
        let newMessages = { ...messages }
        let timeStamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        newMessages[activeUser.id] = [...(newMessages[activeUser.id] || []), { text: input, sender: 'You', timeStamp }]
        setMessages(newMessages)
        setInput('')
        setShowEmojiPicker(false)
    }
    let onEmojiClick = (emojiData) => {
        setInput(prevInput => prevInput + emojiData.emoji)
    }
    let showEmojis = (event) => {
        setShowEmojiPicker(!showEmojiPicker)
    }
    return (
        <div className='relative'>
            {showEmojiPicker && (
                <div className='absolute bottom-20 right-12 z-50'>
                    <EmojiPicker
                        onEmojiClick={onEmojiClick}
                        theme={`${theme == 'dark' ? 'dark' : 'light'}`}
                    ></EmojiPicker>
                </div>
            )}
            <div className='p-2 flex items-center'>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={`w-full p-2 rounded-2xl h-[7vh]  ${theme == 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`} />
                <button
                    className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
                    onClick={showEmojis}
                >😊</button>

                <button
                    className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
                    onClick={sendMessage}
                >Send</button>
            </div>
        </div>
    )
}
export default TextBar