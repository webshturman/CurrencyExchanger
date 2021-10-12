import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import s from './lesson3.module.css'

type FilmType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');
    const [searchResult, setSearchResult] = useState<Array<FilmType>>([]);
    const [errorMessage, setErrorMessage] = useState('');
    // const [searchResult, setSearchResult] = useState('');

    // const searchFilm = () => {
    //     API.searchFilmsByTitle(searchName)
    //         .then(({data}) => {
    //             const{Search,Response,Error} = data
    //             if(Response === 'True'){
    //                 // setSearchResult(JSON.stringify(Search))
    //                 setErrorMessage('')
    //                 setSearchResult(Search)
    //             }else {
    //                 setErrorMessage(Error)
    //             }
    //         })
    //         .catch((e) => {
    //             console.log("Big Error Data")
    //         })
    // };
    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName)
            const {Search, Response, Error} = data
            if (Response === 'True') {
                // setSearchResult(JSON.stringify(Search))
                setErrorMessage('')
                setSearchResult(Search)
            } else {
                setErrorMessage(Error)
            }

        } catch(e){
            console.log("Big Error Data")
        }
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div className={s.imageList}>
                    {errorMessage ? errorMessage : searchResult.map(el => <span key={el.imdbID}><img src={el.Poster} alt=""/></span>)}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;