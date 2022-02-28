import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import App from "./components/App/App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthContextProvider from './components/state/AuthLogin'

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,

  document.getElementById("root")
);