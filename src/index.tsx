import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { ModalContextProvider } from "./context/ModalContextProvider";
import Modal from "./components/Modal";
import { UserContextProvider } from "./context/UserContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <UserContextProvider>
          <ModalContextProvider>
            <App />
            <Modal />
          </ModalContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
