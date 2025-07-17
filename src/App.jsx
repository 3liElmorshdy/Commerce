import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import Products from "./Component/Products/Products";
import { store } from "./lib/store";
import About from './Component/About/About'; // to be created
import Login from './Component/Login/Login';
// import Test from "./Context2/Counter";

// import { useState} from "react";
// import CounterProvider from "./Context/CounterContext";
// import WrapperData from "./Context2/Context2";
// import SenDataWrapper from "./Context2/Counter";

function App() {
  // const [Counter, setCounter] = useState(0);
  // function HanderCounter() {
  //   setCounter(Counter + 1);
  // }
  // function HanderDecrement() {
  //   setCounter(Counter - 1);
  // }
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/home" element={<Products />} />
          </Routes>
          <Footer />
        </HashRouter>
      </Provider>

       
    
    
    
    
    </>
  );
}

export default App;



      // <Test>
      //       <NavBar />
      //       <Products />

      //       <Footer />
      //       </Test>