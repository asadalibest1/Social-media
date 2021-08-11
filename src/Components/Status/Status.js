import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        margin: '18px auto',
        backgroundColor: "transparent",
        padding: 0,
    },
    TextFieldxs: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: "150%",
        height: '100%',
    },
    TextFieldsm: {
        width: "92%",
        margin: "15px 20px",
    }
}));


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

export default function Status() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>


            <Box display="flex">

                <CardHeader
                    avatar={
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar />
                        </StyledBadge>

                    }
                    title="Simmon bradley"
                    subheader="Share you Thoughts"
                />

                <Hidden xsDown implementation="css" width="100%" height="100%">
                    <Box className={classes.TextFieldxs} >
                        <TextField
                            id="standard-multiline-flexible"
                            placeholder="Type here..."
                            multiline
                            maxRows={4}
                            style={{ width: "93%" }}
                        />
                    </Box>
                </Hidden>

            </Box>
            <Hidden smUp implementation="css" width="100%" height="100%" style={{ marginBottom: "20px" }}>
                <Box className={classes.TextFieldsm} >
                    <TextField
                        id="standard-multiline-flexible"
                        placeholder="Write a Comment"
                        multiline
                        maxRows={4}
                        style={{ width: "93%" }}
                    />
                </Box>
            </Hidden>
        </Card>
    );
}
