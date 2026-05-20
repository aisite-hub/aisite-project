import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// 1. Import the n8n chat styles and creator function
import "@n8n/chat/style.css";
import { useEffect } from "react";
import { createChat } from "@n8n/chat";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // 2. Initialize the chat widget on component mount
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-n8n.2dagyj.easypanel.host/webhook/8aaad4e6-bcbb-4e1d-9a2f-38dc9647dfa4/chat',
      mode: 'window', // Creates a floating bubble in the corner
      showWelcomeScreen: true,
      initialMessages: [
      '¡Hola! 👋',
      'Soy Alex, asistente virtual de CreacionLabs, ¿cómo puedo ayudarte hoy?'
    ],
      i18n: {
        en: {
          title: 'Creación Labs',
          subtitle: 'Asistente Virtual',
          placeholder: 'Resuelve tus dudas... ',
        }
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base={import.meta.env.BASE_URL}>
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;