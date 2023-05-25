import { Navbar, Footer, Landing, ProductsPage} from "./components";
import { Route, Routes } from "react-router";
import ErrorPage from "./error404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;
