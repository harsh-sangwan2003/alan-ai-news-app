import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';

const alankey = 'abc1b1493c9f5bb0ef3d3248c4e73ceb2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles,setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand:({command,articles})=>{
                if(command==='newHeadlines')
                setNewsArticles(articles);
            }
        })
    }, [])
    return (
        <div>
            <h1>Alan AI New Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App
