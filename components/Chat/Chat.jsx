import { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("text", text);
  };
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr, auto]">
      <div>
        <h2 className="text-5xl">Messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-[99%]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button className="btn btn-primary joint-item" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
