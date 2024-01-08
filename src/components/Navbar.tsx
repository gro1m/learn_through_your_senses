import { Link } from "react-router-dom";
import { HOME_PATH } from "../routes/HomeRoutes";
import { ABOUTME_PATH } from "../routes/AboutMeRoutes";
import { BUILDCOMPUTERINTRO_PATH } from "../routes/BuildComputerIntroRoutes";
import { COMBINATORICS_PATH } from "../routes/CombinatoricsRoutes";
import { LSTM_PATH } from "../routes/LstmRoutes";
import { SimpleRNNPATH } from "../routes/SimpleRNNRoutes";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (): JSX.Element => {
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
            <Link to={HOME_PATH} className="link">Home</Link>
            <Link to={ABOUTME_PATH} className="link">About</Link>
            <Link to={BUILDCOMPUTERINTRO_PATH} className="link">Build Computer Intro</Link>
            <Link to={COMBINATORICS_PATH} className="link">Combinatorics</Link>
            <Link to={SimpleRNNPATH} className="link">Simple RNN</Link>
            <Link to={LSTM_PATH} className="link">LSTM</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
