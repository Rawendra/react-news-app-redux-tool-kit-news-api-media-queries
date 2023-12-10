import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CustomRoutes from "./routes/CustomRoutes";
import '@fontsource/roboto/300.css';
function App() {
  return (
    <>
      <Header />
      <CustomRoutes />
      <Footer />
    </>
  );
}

export default App;
