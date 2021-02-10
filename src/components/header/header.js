import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link as RouterLink} from 'react-router-dom';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({cart, favorite}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={RouterLink} to="/">
            <HomeIcon color="secondary" />
          </Button>
          <Typography variant="h6" component="h1" className={classes.title}>
            Books Store
          </Typography>
          <Button component={RouterLink} to="/favorite">
            <Badge badgeContent={favorite.length} color="secondary">
              <FavoriteIcon color="secondary" />
            </Badge>
          </Button>
          <Button component={RouterLink} to="/cart">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon color="secondary" />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = ({cart, favorite}) => {
  return {cart, favorite};
}

export default connect(mapStateToProps)(Header);
