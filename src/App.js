import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
function App() {
  return (
    <Container maxWidth={"md"}>
      <Outlet></Outlet>
    </Container>
  );
}

export default App;
