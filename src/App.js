import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Container maxWidth={"md"}>
        <Outlet></Outlet>
      </Container>
    </>
  );
}

export default App;
