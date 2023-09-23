import React, { useState } from 'react';

function ChatApp() {
    const [messages, setMessages] = useState([
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          sender: 'user',
          timestamp: '2 min ago',
        },
        {
          text: 'Hi there!',
          sender: 'other',
          timestamp: '1 min ago',
        },
        {
          text: 'How are you doing today?',
          sender: 'other',
          timestamp: '1 min ago',
        },
        {
          text: 'Im doing great, thanks!',
          sender: 'user',
          timestamp: 'Just now',
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          sender: 'user',
          timestamp: 'Just now',
        },
        {
          text: 'That sounds good!',
          sender: 'other',
          timestamp: 'Just now',
        },
        // Add more messages here
      ]);
      ;

  const handleMessageSubmit = (messageText) => {
    const newMessage = {
      text: messageText,
      sender: 'user', // You can set sender as 'user' or 'other' as needed
      timestamp: 'Just now', // You can set the appropriate timestamp here
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col  h-full w-full bg-white shadow-xl rounded-lg ">
      {/* Display messages here */}
      <div className="flex flex-col flex-grow h-0 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex w-full mt-2 space-x-3 max-w-xs ${
              message.sender === 'user' ? 'ml-auto justify-end' : ''
            }`}
          >
            <div>
              <div
                className={`${
                  message.sender === 'user' ? 'bg-blue-600 text-white rounded-l-lg rounded-br-lg' : 'bg-gray-300 rounded-r-lg rounded-bl-lg'
                } p-3`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              {/* <span className="text-xs text-gray-500 leading-none">{message.timestamp}</span> */}
            </div>
            {/* {message.sender !== 'user' && (
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            )} */}
          </div>
        ))}
      </div>

      {/* Input for sending new messages */}
      <div className="border border-gray-300 p-4 rounded-lg">
        <input
          className="flex items-center h-10 w-full rounded px-3 text-sm focus:outline-none"
          type="text"
          placeholder="Type your message…"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleMessageSubmit(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

export default ChatApp;
