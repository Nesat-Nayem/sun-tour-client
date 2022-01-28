import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import "./Dashboard.css";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Button, Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../hooks/useAuth";

const drawerWidth = 240;
const Dashboard = (props) => {
  const { singOutUser, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {admin ? (
          <Box>
            <NavLink to="userPosts">
              <ListItem sx={{ fontSize: "20px", color: "#333" }}>
                User Post
              </ListItem>
            </NavLink>
            <NavLink to="addAPost">
              <ListItem sx={{ fontSize: "20px", color: "#333" }}>
                Add A Post
              </ListItem>
            </NavLink>

            <NavLink to="adAdmin">
              <ListItem sx={{ fontSize: "20px", color: "#333" }}>
                Add An Admin
              </ListItem>
            </NavLink>
            <NavLink to="allPost">
              <ListItem sx={{ fontSize: "20px", color: "#333" }}>
                All Post
              </ListItem>
            </NavLink>
          </Box>
        ) : (
          <Box>
            <NavLink to="createAPost">
              <ListItem sx={{ fontSize: "20px", color: "#333" }}>
                Create A Post
              </ListItem>
            </NavLink>
            <NavLink to="addreview">
              <ListItem sx={{ fontSize: "20px", color: "#333" }}>
                Add Review
              </ListItem>
            </NavLink>
          </Box>
        )}

        <Box sx={{ marginLeft: "15px" }}>
          <Link to="/">
            <Button variant="contained">Home</Button>{" "}
          </Link>
          <br />

          <Button
            style={{ marginTop: "10px" }}
            onClick={singOutUser}
            variant="contained"
          >
            LogOut
          </Button>
        </Box>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
