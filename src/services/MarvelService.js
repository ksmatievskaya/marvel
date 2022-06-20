import {useHttp} from '../components/hooks/http.hook';

const  useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=33ecc2556bac814c7b5bf2c4fc89f04f';
    const _baseOffset = 210;

   

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0])
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

   const  _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' +  char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            price: comics.prices.price ? `${comics.prices.price}$` : 'not available',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount}p.` : 'No info about the number of pages',
            language: comics.textObjects.language || 'en-rus'
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic};
}

export default useMarvelService;