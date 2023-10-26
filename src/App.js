import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import image from './image.jpg';
import './styles.css';

const alankey = 'abc1b1493c9f5bb0ef3d3248c4e73ceb2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle,setActiveArticle] = useState(0);

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines')
                    setNewsArticles(articles);

                else if(command==='highlight')
                setActiveArticle((prevArticle)=>prevArticle+1);
            }
        })
    }, [])
    return (
        <div>
            <div className='logoContainer'>
                <img src={image} alt="alan-logo" className='alanLogo' />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App
