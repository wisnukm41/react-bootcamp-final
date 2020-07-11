import React, { useEffect } from 'react';
import AnimeCard from './AnimeCard';
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { dataRequest } from '../actions';


export default function AnimeContainer(props) {

    // Inisiasi dispatch
    const dispatch = useDispatch();

    // useEffect yang hanya di jalankan ketika awal komponen atau onMount
    useEffect(() => {
        dispatch(dataRequest(props.url))
    }, [])

    return (
        <div className='content-container'>
            {props.loading ? <Loading /> :
                props.data.length > 0 ?
                    // lakukan Listing elemen tiap data, jika ada
                    props.data.map((e, i) => <AnimeCard data={e} key={i} />)
                    : <h2>Data Not Found</h2>

            }
        </div>
    )
}
