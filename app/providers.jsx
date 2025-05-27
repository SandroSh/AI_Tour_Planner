"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                // Refresh the data every 1 minute
                queries: {
                    staleTime: 1000 * 60 * 1, 
                },
            },
        });
    }
    );
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
