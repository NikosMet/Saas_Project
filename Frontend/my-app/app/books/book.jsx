"use client"
import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@material-ui/core';

const BookDetailPage = ({index, book }) => {
  return (
    <Container>
      <Paper elevation={3} className="p-6 mt-6">
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <img  alt={book.title} className="w-full" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1">
              {book.title}
            </Typography>
            <Typography variant="h6" component="h2">
              by {book.author}
            </Typography>
            <Typography variant="body1" className="mt-4">
              {book.description}
            </Typography>
            <Typography variant="subtitle1" className="mt-4">
              Author: {book.author}
            </Typography>
            <Typography variant="subtitle1">Price: ${book.price}</Typography>
            {/* Add more book details here (e.g., rating, formats, etc.) */}
            <Button
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookDetailPage;
