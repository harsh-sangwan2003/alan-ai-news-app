import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'
import './styles.css'
import classNames from 'classnames'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    return (
        <Card className={classNames("card", activeArticle === i ? "activeCard" : null)}>

            <CardActionArea href={url} target='_blank'>
                <CardMedia className='media' image={urlToImage || "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} />

                <div className='details'>
                    <Typography variant='body2' color='textSecondary' component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component="h2">{source.name}</Typography>
                </div>

                <Typography className='title' gutterBottom varinat="h5">{title}</Typography>

                <CardContent>
                    <Typography variant='body2' color="textSecondary" component="p">{description}</Typography>
                </CardContent>

            </CardActionArea>

            <CardActions className='cardActions'>

                <Button size="small" color="primary">Learn More</Button>
                <Typography variant='h5' color="textSecondary">{i + 1}</Typography>

            </CardActions>

        </Card>
    )
}

export default NewsCard
