import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
