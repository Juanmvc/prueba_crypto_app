import logo from './logo.svg';
import './App.css';
import { ButtonSolid, Grid, Box, Text, Icon } from 'design-system';

function App() {
  return (
    <div className="App">
      <Box mt="30px" height="150px" bg="red" mb="32px">
        <Box pl="auto" pr="auto" pt="20px" mb="44px">
            <p>Hi Anakin</p>
        </Box>
        <Box ml="auto" mr="auto" mb="8px">
          <p>Your balance</p>
        </Box>
        <Box ml="auto" mr="auto">
          <p>5.908.873$</p>
        </Box> 
        <Box>
          <Text>2345</Text>
  </Box>
      </Box>
      <Box height="150px" bg="white" pt="28px" pl="32px" pr="32px">
        <Box display="flex" justifyContent="left">
          <p>Recent</p>
        </Box>

      </Box>
    </div>
  );
}

export default App;
