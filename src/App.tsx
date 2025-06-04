import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="1y8r32tlg" data-path="src/App.tsx">
    <TooltipProvider data-id="zb1btvkl6" data-path="src/App.tsx">
      <Toaster data-id="h8ld1r3ml" data-path="src/App.tsx" />
      <BrowserRouter data-id="4y3ggdter" data-path="src/App.tsx">
        <Routes data-id="hcojxxshw" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="rykkfonq0" data-path="src/App.tsx" />} data-id="wt6banjyp" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="b4bjzaeqe" data-path="src/App.tsx" />} data-id="kdxdf8dm1" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;