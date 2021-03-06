import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

export default function Product({
  product,
  totalCostPrice,
  setTotalCostPrice,
  totalSellingPrice,
  setTotalSellingPrice,
}) {

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          cost price: {product.costPrice}
        </Typography>
        <Typography variant="body2" gutterBottom>
          selliing price: {product.sellingPrice}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {product.category}
        </Typography>
        <CardActions>
          {product.isPending &&
          <Button
            onClick={() => {
              setTotalCostPrice(totalCostPrice + product.costPrice);
              setTotalSellingPrice(totalSellingPrice + product.sellingPrice);
              product.isPending = false;
            }}
          >
            Manage
          </Button>}
        </CardActions>
      </CardContent>
    </Card>
  );
}
