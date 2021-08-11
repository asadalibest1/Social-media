import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
import video from "../../videos/123.mp4";
import UserAvatar from "../Avatar/Avatar";



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        margin: '50px auto',
    },
}));

export default function Posts({ users }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <Box display="flex" margin={2}>

                <UserAvatar />

                <Box display="flex" alignItems="center" margin={1}>
                    {users}
                </Box>
                <Box display="flex" width="60%">
                    <Typography variant="body2" color="textSecondary" component="p"
                        style={{ marginLeft: "auto", display: "flex", alignItems: "center", textAlign: "right" }}>
                        Today <br />
                        11:24 PM
                    </Typography>

                </Box>
            </Box>
            <Box margin={2}>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    lobortis turpis tellus.
                </Typography>
            </Box>

            <CardMedia
                component='video'
                image={video}
                src={video}
                title="Paella dish"
                controls
            />

            <CardActions disableSpacing>

                <IconButton aria-label="add to favorites" style={{ color: "red" }}>
                    <FavoriteIcon />
                </IconButton>

                <CardActions style={{ width: "60%" }}>
                    <TextField
                        id="standard-multiline-flexible"
                        placeholder="Write a Comment"
                        multiline
                        maxRows={4}
                        style={{ width: "100%" }}
                    />
                </CardActions>

                <CardActions style={{ width: "30%", marginTop: "15px" }}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        View Comments
                    </Typography>
                </CardActions>

            </CardActions>
        </Card>
    );
}
