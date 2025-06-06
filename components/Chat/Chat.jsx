"use client";
import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Failed to generate response");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });
  console.log(messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr, auto]">
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role === "user" ? "👤" : "🤖";
          const bcg = role === "user" ? "bg-base-200" : "bg-base-100";
          return <div key={index} className={`${bcg} flex py-6  px-8 text-xl leading-loose border-b border-base-300`}>
            <span className="mr-4">{avatar}</span>
            <p className="max-w-3xl" >{content}</p>
          </div>;
        })}
        {isPending ? <span className="loading"></span> : null}
      </div>
      <form onSubmit={handleSubmit} className=" max-w-4xl flex items-end justify-center">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-[99%]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button
            className="btn btn-primary joint-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
