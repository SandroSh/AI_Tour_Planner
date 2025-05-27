'use client';
import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";



const Chat = () => {
  const [text, setText] = useState("");
  const [message, setMessages] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (message) => generateChatResponse(message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
  };
  return (
    <div className="min-h-[calc(100vh-6rem)]  grid grid-rows-[1fr, auto]">
      <div>
        <h2 className="text-5xl">Messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl flex items-end">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-[99%]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button className="btn btn-primary joint-item" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
