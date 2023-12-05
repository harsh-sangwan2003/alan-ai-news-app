import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect } from 'react'
import { useState } from 'react'
import NewsCards from './components/NewsCards/NewsCards'
import image from './image.jpg'
import './styles.css'

const alanKey = "abc1b1493c9f5bb0ef3d3248c4e73ceb2e956eca572e1d8b807a3e2338fdd0dc/stage"

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles)
                }

            }
        })
    }, [])

    return (
        <div>
            <div className='logoContainer'>
                <img src={image} className='alanLogo' alt="alan logo" />
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App
