import { Chat } from "@/components/Chat";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";




const ChatPage = () => {
  const queryClient = new QueryClient();
  return (
    // HydrationBoundary is used to transfer data from the server to the client
    // It allows the client to access the data that was fetched on the server
    // dehydrate is helping react query to know what data is already loaded
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};

export default ChatPage;
