import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./components/state/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/http"; 

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}> 
        <App /> 
    </Provider>
  </QueryClientProvider>
  ,

  document.getElementById("root")
);
