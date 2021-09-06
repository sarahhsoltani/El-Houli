import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from "./StyleProductToCard";

export default function ProductToCard({pub,qty}) {
  const classes = styles();
  console.log("pub",pub)
  const columns = [{ name: "Produit",align: "center", index:1 },
  { name: "Nom",align: "center", index:2 },
  { name: "Quantité",align: "left", index:4 },
  { name: "Prix unitaire",align: "center", index:5 },
  { name: "Prix Totale",align: "center", index:6 }]

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid`,
      padding: '0 4px',
    },
  }))(Badge);

     return (
    <>
        <TableContainer>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead style={{ backgroundColor: "#e2def3" }}>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} align={column.align}>
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                   <TableCell >
                   <img src={pub.image}
                    alt="fixed"
                    className={classes.imageProduct}
                   />
                    </TableCell>
                    <TableCell >
                   {pub.title}
                    </TableCell>
                    <TableCell >
                    <IconButton aria-label="cart">
      <StyledBadge badgeContent={qty} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
                    </TableCell>
                    <TableCell >
                   {pub.price} TND
                    </TableCell>
                    <TableCell >
                   {pub.price*qty} TND
                    </TableCell>
                </TableRow>
                </TableBody>
          </Table>
        </TableContainer>
        </>
  );
}
