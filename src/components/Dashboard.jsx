import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

const useStyle = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  totals: {
    height: "64vh",
    width: "32vw",
    padding: "10px",
  },
}));

export default function Dashboard() {
  const SAMPLE_PRODUCTS = [
    {
      id: 1,
      name: "Shoe-1",
      costPrice: 50.0,
      sellingPrice: 70.0,
      category: "shoe",
    },
    {
      id: 2,
      name: "Bag-1",
      costPrice: 20.0,
      sellingPrice: 25.0,
      category: "bag",
    },
    {
      id: 2,
      name: "Bag-2",
      costPrice: 15.0,
      sellingPrice: 22.0,
      category: "bag",
    },
    {
      id: 3,
      name: "Shoe-2",
      costPrice: 29.0,
      sellingPrice: 39.0,
      category: "shoe",
    },
  ];

  const [products, setProducts] = useState(SAMPLE_PRODUCTS);
  const [totalCostPrice, setTotalCostPrice] = useState(0);
  const [totalSellingPrice, setTotalSellingPrice] = useState(0);

  const classes = useStyle();

  return (
    <>
      <Navbar />
      <div className={classes.appBarSpacer} />
      <div className={classes.content}>
        <Paper style={{ padding: "10px" }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid xs={12} md={3} item key={product.id}>
                <Product
                  product={product}
                  totalCostPrice={totalCostPrice}
                  setTotalCostPrice={setTotalCostPrice}
                  totalSellingPrice={totalSellingPrice}
                  setTotalSellingPrice={setTotalSellingPrice}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Paper className={classes.totals}>
          <Typography variant="h5">Totals</Typography>
          <Typography variant="body2">
            total cost price: ${totalCostPrice}
          </Typography>
          <Typography variant="body2">
            total selling price: ${totalSellingPrice}
          </Typography>
          <Typography variant="body2">
            profit: ${totalSellingPrice - totalCostPrice}
          </Typography>
        </Paper>
      </div>
    </>
  );
}
