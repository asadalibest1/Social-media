import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Status from "../Status/Status";
import Posts from "../Posts/Posts";
import Appbar from "../Appbar/Appbar"


const drawerWidth = 260;

const family = ['Asad Khan', 'Ali Raza', 'Qasim Shah', 'Zain Khan', 'Shehram Khan'];
const friends = ['Amin Khan', 'Shaikh Raza', 'Asad Khan', 'Ali Raza', 'Qasim Shah', 'Zain Khan', 'Shehram Khan'];

const homeMenu = ['Home Feed', 'Personal Info', 'Photo', 'Feed', 'Chat', 'Setting'];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  divider: {
    margin: "10px",
    marginLeft: "25px",
    fontWeight: "bold",
    color: "grey"
  },
  leftDivider: {
    marginLeft: "25px",
    fontWeight: "bold",
    fontSize: "18px",
    color: "grey"
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  menuButtonRight: {
    marginLeft: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));

export default function Home(props) {


  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpenLeft, setMobileOpenLeft] = React.useState(false);
  const [mobileOpenRight, setMobileOpenRight] = React.useState(false);

  const drawer = (
    <div style={{ marginTop: "15px" }}>
      <div className={classes.toolbar} />

      {
        homeMenu.map(menu => {
          return <List key={menu}>
            <ListItem button>
              <Typography variant="h6" className={classes.leftDivider} >{menu}</Typography>
            </ListItem>
          </List>
        })
      }
    </div>
  );

  const drawerRight = (

    <div>
      <div className={classes.toolbar} />

      <Typography variant="h6" className={classes.divider} >Family</Typography>
      <Divider style={{ marginLeft: "20px", width: "40%" }} />


      {
        family.map(name => {
          return <List key={name}>
            <ListItem button>
              <FriendAvatar name={name} />
            </ListItem>
          </List>
        })
      }


      <Typography variant="h6" className={classes.divider} >Freinds</Typography>
      <Divider style={{ marginLeft: "20px", width: "40%" }} />


      {
        friends.map(name => {
          return <List key={name}>
            <ListItem button>
              <FriendAvatar name={name} />
            </ListItem>
          </List>
        })
      }
    </div>
  );


  const users = ['Robert johnson', "Edward Snowden", "Stefen Bear", "Abdullah Khan", "Zain Imam"];

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Appbar
          setMobileOpenRight={setMobileOpenRight}
          setMobileOpenLeft={setMobileOpenLeft}
          MobileOpenLeft={mobileOpenLeft}
          MobileOpenRight={mobileOpenRight} />

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">

          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpenLeft}
            onClose={() => setMobileOpenLeft(!mobileOpenLeft)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>



        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>


      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Status />

        {
          users.map(item => <Posts users={item} />)
        }

      </main>


      <nav className={classes.drawer} aria-label="mailbox folders">

        <Hidden smUp implementation="css">

          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={mobileOpenRight}
            onClose={() => setMobileOpenRight(!mobileOpenRight)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerRight}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="right"
            variant="permanent"
            open
          >
            {drawerRight}
          </Drawer>
        </Hidden>

      </nav>



    </div>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};


function FriendAvatar({ name }) {

  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);


  return (
    <Box display="flex" justifyContent='center' alignItems="center">

      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        style={{ marginRight: "7px" }}
        variant="dot">
        <Avatar src="/broken-image.jpg" />
          </StyledBadge>

          <Typography>{name}</Typography>

    </Box>
  )
}
