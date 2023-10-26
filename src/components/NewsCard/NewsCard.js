import React from 'react'
import { Card, CardMedia, Typography, CardActions, CardActionArea, Button, CardContent } from '@mui/material'
import './styles.css'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i,activeArticle }) => {
    return (
        <Card className='card'>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className='media' image={urlToImage} />
                <div className='details'>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>

                <Typography className='title' gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className='cardActions'>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
