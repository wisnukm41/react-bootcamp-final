import React from 'react'
import { useSelector } from 'react-redux'
import AnimeContainer from './AnimeContainer';
import { Link } from 'react-router-dom';

// Komponen Search
export default function Search({ match }) {
    // menngunakan state 
    const state = useSelector(state => state);
    return (
        <div className='home-content'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to='/'>
                    <button>
                        Kembali
                </button>
                </Link>
                {/* mengambul params dari parameter */}
                <h1>Result of: {match.params.name}</h1>
            </div>
            <AnimeContainer data={state.data} loading={state.loading} url={`search/anime?q=${match.params.name}`} />
        </div >
    )
}
