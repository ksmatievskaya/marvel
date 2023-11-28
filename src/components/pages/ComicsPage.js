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
            <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(95560165, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/95560165" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
        </>
    )
}

export default ComicsPage;