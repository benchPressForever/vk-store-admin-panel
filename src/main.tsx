import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 минут
        },
    },
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
          <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                  <App />
              </QueryClientProvider>
          </Provider>
      </Router>
  </StrictMode>,
)
