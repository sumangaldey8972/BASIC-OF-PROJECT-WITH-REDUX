import './App.css';
import HomeContainer from "./Containers/HomeContainer"
import { ChakraProvider } from "@chakra-ui/react";
import HeaderContainer from './Containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HomeContainer />
        <HeaderContainer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
