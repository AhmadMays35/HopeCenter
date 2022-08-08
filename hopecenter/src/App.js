import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


function App() {
  return (
    <div className="App">
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 2,
          mx: 30,
          width: 1000,
          height: 1000,
        },
      }}
    >
      <Paper>
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, mx: 45, mb: 5, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <Stack spacing={2} direction="column">
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="New Password" variant="outlined" />
      <TextField id="outlined-basic" label="Account Type" variant="outlined" />
      </Stack>
    </Box>

    <Stack spacing={2} direction="column">
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          my: 2,
          ml: 55,
        },
      }} >
      <Button variant="contained">Sign Up</Button>
    </Box>
    </Stack>
    </Paper>
    </Box>
    </div>
  );
}

export default App;
