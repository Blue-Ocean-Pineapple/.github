import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
// import {  MultiSelectTheme } from 'chakra-multiselect'
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  // components: {
  //   MultiSelect: MultiSelectTheme
  // }

});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App backgroundColor='#FEF9EF' />
    </ChakraProvider>
);

//  <React.StrictMode>  </React.StrictMode>
