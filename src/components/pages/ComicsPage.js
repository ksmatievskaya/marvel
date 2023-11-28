import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';
import { Helmet } from 'react-helmet';

const ComicsPage = () => {

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="list of comics"
                    />
                <title>Comics page</title>
            </Helmet>
            <AppBanner/>
            <div className="counters">
            <a href="https://www.liveinternet.ru/click"
            target="_blank"><img src="https://counter.yadro.ru/logo?44.1"
            title="LiveInternet"
            alt="" style={{border: '0'}} width="31" height="31"/></a>
            </div>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;