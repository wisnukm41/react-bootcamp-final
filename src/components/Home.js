import React, { useRef } from 'react';
import AnimeContainer from './AnimeContainer';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

export default function Home() {

    // penggunaan hooks
    const search = useRef();

    // history hooks untuk melakukan redirect
    const history = useHistory();

    // penggunaan state
    const state = useSelector(state => state);

    // fungsi yang akan di aktifkan jika tombol ditekan
    function clickThis() {
        if (search.current.value !== '') {
            history.push(`s/${search.current.value}`);
        }
    }

    return (
        // komponen home
        <>
            <div className='search-box'>
                <h1>Search Anime</h1>
                <form className='search-box' onSubmit={e => e.preventDefault()}>
                    <input className='search-input' ref={search} />
                    <button className='search-button' onClick={clickThis}>
                        Search
                    </button>
                </form>
            </div>
            <div className='home-content'>
                <AnimeContainer data={state.data} loading={state.loading} url='top/anime/1/airing' /> :
            </div>
        </>
    )
}
