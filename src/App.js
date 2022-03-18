import "./App.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import Content from "./components/content/Content";

import Header from "./components/header/Header";
import ContentCatalog from "./components/content-Catalog/ContentCatalog";
import ContentProduct from "./components/content-product/ContentProduct";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <ContentCatalog />
        <ContentProduct />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
