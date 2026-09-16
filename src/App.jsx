import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ProductDetails from "./Page/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;