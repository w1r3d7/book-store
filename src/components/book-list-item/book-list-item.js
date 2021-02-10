import React from "react";
import {
  Card,
  ButtonGroup,
  makeStyles,
  Button,
  Grid,
  Typography
} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
  },
  media: {
    maxHeight: 150,
  }
});


const BookListItem = ({book}) => {
  const classes = useStyles();
  const {authors, title, url, price, isbn} = book;
  return (
    <Card className={classes.root}>
      <Typography className={classes.title} variant="h6" component="h2">
        {title}
      </Typography>
      <Grid container spacing={1}>
        <Grid item sx={4}>
          <img className={classes.media} src={url} alt={title} />
        </Grid>
        <Grid item sx={8}>
          <Typography>
            Authors: {authors.join(', ')}
          </Typography>
          <Typography>
            ISBN: {isbn}
          </Typography>
          <Typography>
            Price: ${price}
          </Typography>
        </Grid>
      </Grid>
      <ButtonGroup fullWidth>
        <Button variant="contained" color="primary">
          <ShoppingCartIcon />
          Add to Cart
        </Button>
        <Button variant="contained" color="secondary">
          <FavoriteIcon />
          Add to Favorite
        </Button>
      </ButtonGroup>
    </Card>
  )
}

export default BookListItem;
