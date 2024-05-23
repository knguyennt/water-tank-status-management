import { Drawer, Box, IconButton, List, ListItem, ListItemText, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box display="flex" flexDirection="column">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div">
            Form Banner
          </Typography> */}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          sx={{ width: 250 }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ justifyContent: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem button key={1}>
              <Link to="/">
                <ListItemText primary="Trang chu" />
              </Link>
            </ListItem>
            <ListItem button key={2}>
              <Link to="/dashboard">
                <ListItemText primary="Thong ke" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}