import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles'; // useStyles is a hook

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const descriptionSlice = product.description.length >= 16 ? product.description.slice(0, 32) + "..." : product.description;
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {product.name.length >= 11 ? product.name.slice(0, 11) + "..." : product.name}
                    </Typography>
                    <Typography variant="h5" component="h2" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: descriptionSlice}} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
