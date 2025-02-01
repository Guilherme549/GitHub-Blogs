import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { UserContextProvider } from "./contexts/UserContext";
import { PostsContextProvider } from "./contexts/PostsContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserContextProvider>
          <PostsContextProvider>
            <Router />
          </PostsContextProvider>
        </UserContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

