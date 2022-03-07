import './App.css';
import { Dashboard } from "./views/Dashboard/Dashboard" 
import { NavigationBar } from "./NavigationBar/NavigationBar"
import { UserHeader } from "./UserHeader/UserHeader"
import { Box, Grid, Icon, Text } from "design-system"
import { userLocation } from "AppContext"
import { useState } from "react";

function App() {  

  const [location, setLocation] = useState("dashboard");
  
  const value = { location, setLocation };

  return (
    <div className="App">
    <userLocation.Provider value={value} >
      <Box color="white" zIndex={1} position="absolute" top="20px" right="20px">
        <Icon
          name="k-icon-bell"    
          />
      </Box>
        <UserHeader/>
        <Box bg="white" borderTopLeftRadius="30px" borderTopRightRadius="30px" height="80vh" pt={["15px","70px"]}>
          <Grid gridTemplateColumns={["1fr", "1fr 6fr"]} gridTemplateAreas={['"mainContent" "navigationBar"', '"navigationBar mainContent"']}>
            <Grid gridArea="mainContent">
              {location === "dashboard" ? <Dashboard/> :  <Box height="500px"><Text>Sección sin implementar</Text></Box>}
            </Grid>
            <Grid gridArea="navigationBar">
              <NavigationBar/>
            </Grid>
          </Grid>
        </Box>
      </userLocation.Provider>
    </div>
  );
}

export default App;
