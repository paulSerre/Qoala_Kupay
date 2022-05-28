import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import axios from 'axios';
import Transaction from '../../models/transaction';

const WalletViewComponent = () => {

    const [transactions, setTransactions] = React.useState<Array<Transaction>>([]);
    const [error, setError] = React.useState(null);

    React.useEffect(
        () => {
            axios.get(
                "http://localhost:8080/transactions", 
                { 
                    headers: {'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then(
                ({data: product}) => {
                    setError(null);
                    setTransactions(product);
                },
                setError
            )
        },
        []
    )

    if (error) return (
        <>
            An error has occurred while trying to get products.
            Error : {error}
        </>
    )

    return (
        <>
            <List >
                {transactions.map((transaction: Transaction) => 
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`Product: ${transaction.product.name}`}
                            secondary={`Price: ${transaction.product.price}, Date: ${transaction.date}`}
                        />
                    </ListItem>)}
            </List>
        </>
    )
}

export default WalletViewComponent;