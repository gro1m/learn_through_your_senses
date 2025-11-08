import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import {
  HOME_PATH,
  ABOUTME_PATH,
  BUILDCOMPUTERINTRO_PATH,
  COMBINATORICS_PATH,
  LSTM_PATH,
  SimpleRNNPATH,
  DOGBREEDDEMO_PATH,
} from "../AppRoutes";

const links = [
  { path: HOME_PATH, label: "Home" },
  { path: ABOUTME_PATH, label: "About" },
  { path: BUILDCOMPUTERINTRO_PATH, label: "Build Computer Intro" },
  { path: COMBINATORICS_PATH, label: "Combinatorics" },
  { path: SimpleRNNPATH, label: "Simple RNN" },
  { path: LSTM_PATH, label: "LSTM" },
  { path: DOGBREEDDEMO_PATH, label: "Dog Breed Demo" },
];

const Navbar = (): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Brand */}
          <Typography variant="h6" component="div">
            My Portfolio
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="link"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <List sx={{ width: 250 }}>
              {links.map((link) => (
                <ListItem
                  button
                  component={Link}
                  to={link.path}
                  key={link.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
