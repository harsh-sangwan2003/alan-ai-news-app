import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { Grow, Grid, Typography } from '@mui/material';
import './styles.css';

function NewsCards({ articles }) {
  return (

    <Grow in>

      <Grid container alignItems='stretch' spacing={3} className='container'>

        {
          articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} ld={3} style={{ display: 'flex' }}>
              <NewsCard article={article} i={i} />
            </Grid>
          ))
        }

      </Grid>

    </Grow>

  )
}

export default NewsCards
