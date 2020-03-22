import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CardLayout({ cards }) {
  const useStyles = makeStyles(theme => ({
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1
    },
    expand: {
      marginLeft: "auto"
    }
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {cards.map(card => (
        <Grid item key={card.id} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography>{card.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to card">
                <ShoppingCartIcon />
                <Typography>+{card.needingredient.length}</Typography>
              </IconButton>
              <Typography className={classes.expand}>{card.time}분</Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardLayout;
