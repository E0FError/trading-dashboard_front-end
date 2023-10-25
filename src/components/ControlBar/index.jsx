// Header/index.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../redux/headerSlice';
// Add any other Material-UI components you may need

function Header() {
    {/* const dispatch = useDispatch();
    const title = useSelector(state => state.header.title);

    React.useEffect(() => {
        dispatch(setTitle("New Title from Redux"));
      }, [dispatch]);
  // Here, you can destructure any props coming from Redux or parent components
  // const { yourReduxData } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Watchlist</Button>
        <Button color="inherit">Trades</Button>
        // Add more buttons or controls as needed
      </Toolbar>
    </AppBar>
  );*/}
  return <div>Test Header</div>;
};

export default Header; 
