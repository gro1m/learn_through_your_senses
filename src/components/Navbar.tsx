import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {
  HOME_PATH,
  ABOUTME_PATH,
  BUILDCOMPUTERINTRO_PATH,
  COMBINATORICS_PATH,
  LSTM_PATH,
  SimpleRNNPATH,
  DOGBREEDDEMO_PATH,
} from "../AppRoutes";

const Navbar = (): JSX.Element => {
  const links = [
    { path: HOME_PATH, label: "Home" },
    { path: ABOUTME_PATH, label: "About" },
    { path: BUILDCOMPUTERINTRO_PATH, label: "Build Computer Intro" },
    { path: COMBINATORICS_PATH, label: "Combinatorics" },
    { path: SimpleRNNPATH, label: "Simple RNN" },
    { path: LSTM_PATH, label: "LSTM" },
    { path: DOGBREEDDEMO_PATH, label: "Dog Breed Demo" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="link" style={{ marginRight: "1rem", color: "inherit", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
