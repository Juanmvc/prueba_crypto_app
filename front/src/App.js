import './App.css';
import { Dashboard } from "./views/Dashboard/Dashboard" 
import { NavigationBar } from "./NavigationBar/NavigationBar"
import { UserHeader } from "./UserHeader/UserHeader"
import { Box, Grid } from "design-system"

function App() {
  return (
    <div className="App">
      <UserHeader/>
      <Box bg="white" borderTopLeftRadius="30px" borderTopRightRadius="30px">
        <Grid gridTemplateColumns={["1fr", "1fr 3fr"]}>
          <Dashboard/>
          <NavigationBar/>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
