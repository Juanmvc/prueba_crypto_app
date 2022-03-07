import './App.css';
import { Dashboard } from "./views/Dashboard/Dashboard" 
import { NavigationBar } from "./NavigationBar/NavigationBar"
import { UserHeader } from "./UserHeader/UserHeader"
import { Box, Grid, Icon } from "design-system"

function App() {
  const [section, setSection] = useState("dashboard")
  return (
    <div className="App">
      <Box color="white" zIndex={1} position="absolute" top="20px" right="20px">
        <Icon
          name="k-icon-bell"    
          />
    </Box>
      <UserHeader/>
      <Box bg="white" borderTopLeftRadius="30px" borderTopRightRadius="30px" height="80vh" pt={["15px","70px"]}>
        <Grid gridTemplateColumns={["1fr", "1fr 6fr"]} gridTemplateAreas={['"mainContent" "navigationBar"', '"navigationBar mainContent"']}>
          <Grid gridArea="mainContent">
            <Dashboard/>
          </Grid>
          <Grid gridArea="navigationBar">
            <NavigationBar section={section} setSection={setSection}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
