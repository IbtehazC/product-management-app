import { Drawer, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
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
    textAlign: "center",
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
      isPending: true,
    },
    {
      id: 2,
      name: "Bag-1",
      costPrice: 20.0,
      sellingPrice: 25.0,
      category: "bag",
      isPending: true,
    },
    {
      id: 3,
      name: "Bag-2",
      costPrice: 15.0,
      sellingPrice: 22.0,
      category: "bag",
      isPending: true,
    },
    {
      id: 4,
      name: "Shoe-2",
      costPrice: 29.0,
      sellingPrice: 39.0,
      category: "shoe",
      isPending: true,
    },
  ];

  const [products, setProducts] = useState(SAMPLE_PRODUCTS);
  const [totalCostPrice, setTotalCostPrice] = useState(0);
  const [totalSellingPrice, setTotalSellingPrice] = useState(0);

  const classes = useStyle();

  const pendingProducts = products.filter(
    (product) => product.isPending === true
  );
  const managedProducts = products.filter(
    (product) => product.isPending !== true
  );

  return (
    <>
      <Navbar />
      <div className={classes.appBarSpacer} />
      <div className={classes.content}>
        <Drawer variant="permanent">
          <Typography variant="h5">Drawer</Typography>
        </Drawer>
        <Paper style={{ padding: "10px" }}>
          <Typography>Pending Products</Typography>
          {pendingProducts.length === 0 ? (
            <Typography>There are no more products left pending</Typography>
          ) : (
            <Grid container spacing={3}>
              {pendingProducts.map((pendingProduct) => (
                <Grid xs={12} md={6} item key={pendingProduct.id}>
                  <Product
                    product={pendingProduct}
                    totalCostPrice={totalCostPrice}
                    setTotalCostPrice={setTotalCostPrice}
                    totalSellingPrice={totalSellingPrice}
                    setTotalSellingPrice={setTotalSellingPrice}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          <Typography>Managed Products</Typography>
          <Grid container spacing={3}>
            {managedProducts.map((managedProduct) => (
              <Grid xs={12} md={6} item key={managedProduct.id}>
                <Product
                  product={managedProduct}
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
          <Typography>
            total cost price: ${totalCostPrice}
          </Typography>
          <Typography>
            total selling price: ${totalSellingPrice}
          </Typography>
          <Typography>
            profit: ${totalSellingPrice - totalCostPrice}
          </Typography>
          <div>
            <Typography>Products Pending: {pendingProducts.length}</Typography>
            <Typography>Total products managed: {managedProducts.length}</Typography>
          </div>
        </Paper>
      </div>
    </>
  );
}
