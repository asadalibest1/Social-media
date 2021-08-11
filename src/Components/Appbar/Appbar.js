import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import avatar from "../../img/avatar.bmp";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    menuIcons: {
        width: '200%',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },

    menuButtonRight: {
        marginLeft: theme.spacing(5),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

}));


export default function Appbar(props) {

    const {
        setMobileOpenRight,
        setMobileOpenLeft,
        MobileOpenLeft,
        MobileOpenRight,
    } = props;

    const classes = useStyles();


    return (
        <AppBar position="fixed" className={classes.appBar}
            style={{ width: '100%', zIndex: "10000" }}
        >
            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => setMobileOpenLeft(!MobileOpenLeft)}
                    className={classes.menuButton}
                >
                    <HomeWorkIcon />

                </IconButton>


                <Box display="flex" justifyContent='center' alignItems="center">
                    <Avatar alt="Remy Sharp" src={avatar} style={{ marginRight: "6px" }} />


                    <Hidden smUp implementation="css">
                        <Typography >TresmindSolution </Typography>
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <Typography >Task for TresmindSolution </Typography>
                    </Hidden>
                </Box>

                <Hidden xsDown implementation="css" style={{ marginLeft: "100px", border: '1px solid black' }} >
                    <Box className={classes.menuIcons}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            style={{ margin: "auto 28px" }}
                            edge="start"
                        >
                            <MapIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            style={{ margin: "auto 28px" }}
                            edge="start"
                        >
                            <PersonIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            style={{ margin: "auto 28px" }}
                            edge="start"
                        >
                            <GroupIcon fontSize="large" />
                        </IconButton>
                    </Box>

                </Hidden>


                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => setMobileOpenRight(!MobileOpenRight)}
                    className={classes.menuButtonRight}
                >
                    <GroupIcon />
                </IconButton>
            </Toolbar>

        </AppBar>

    )
}