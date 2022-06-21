import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import decoration from '../../resources/img/vision.png';
import { Helmet } from "react-helmet";

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
      setChar(id);
    }

    return (
       <>
        <Helmet>
          <meta
            name="description"
            content="Marvel information portal"
          />
          <title>Marvel information portal</title>
        </Helmet>
         <RandomChar/>
        <div className="char__content">
            <CharList onCharSelected={onCharSelected}/>
            <ErrorBoundary>
                <CharInfo charId={selectedChar}/>
            </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
       </>
    )
}

export default MainPage;