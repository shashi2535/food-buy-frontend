import { Routing } from "./routes/router";
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <ChakraProvider>
   <Routing/>
   <ToastContainer />
   </ChakraProvider>
  )
}

export default App;
