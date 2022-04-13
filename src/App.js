import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <Header/>
              <Navbar/>
              <main className="main">
                  <AppRouter/>
              </main>
          </BrowserRouter>

      </div>
  );
}

export default App;
