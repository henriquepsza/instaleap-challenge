import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResponsiveLayout from "./components/ResponsiveLayout.tsx";
import {ChakraProvider} from "@chakra-ui/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider>
        <ResponsiveLayout />
      </ChakraProvider>
  </StrictMode>,
)
