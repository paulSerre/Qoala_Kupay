import React from 'react';
import { List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from "@mui/material"
import { Product } from '../../models/product';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

const ProductsViewComponent = () => {

    const [products, setProducts] = React.useState<Array<Product>>([]);
    const [error, setError] = React.useState(null);

    React.useEffect(
        () => {
            axios.get(
                "http://localhost:8080/product", 
                { 
                    headers: {'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then(
                ({data: product}) => {
                    setError(null);
                    setProducts(product);
                },
                setError
            )
        },
        []
    )

    const buyProduct = (productId: number) => {
        axios.post(
            `http://localhost:8080/transactions/${productId}`,
            {

            },
            { 
                headers: {'Content-Type': 'application/json' },
                withCredentials: true
            }
        ).then(
            (res) => console.log(res),
            (err) => console.log(err)
        )
    }

    if (error) return (
        <>
            An error has occurred while trying to get products.
            Error : {error}
        </>
    )

    return (
        <>
            <List >
                {products.map((product: Product, idx: number) => 
                    <ListItem
                        key={idx}
                        secondaryAction={
                        <IconButton edge="end" aria-label="buy" onClick={() => buyProduct(product.productId)}>
                            <ShoppingCartIcon />
                        </IconButton>
                        }
                    >
                        <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.name}
                            secondary={'Secondary text'}
                        />
                    </ListItem>)}
            </List>
        </>
    )
}

export default ProductsViewComponent;