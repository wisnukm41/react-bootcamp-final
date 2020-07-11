import React, { useEffect } from 'react';
import Loading from './Loading'

// import hooks

import { useDispatch } from 'react-redux';
import { dataRequest } from '../actions';
import { useSelector } from 'react-redux'


export default function Details({ match }) {
    // penggunaan useDispatch, agar dapat melakukan action
    const dispatch = useDispatch();

    // pengunaan useSelector, untuk mengambil state
    const state = useSelector(state => state);

    // style untuk image
    const style = {
        border: '1px solid black',
        backgroundImage: `url(${state.data.image_url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        minHeight: '200px',
        maxHeight: '1000px',
        minWidth: '300px',
        maxWidth: '1000px'
    }

    // onMount component
    useEffect(() => {
        dispatch(dataRequest(`anime/${match.params.id}`))
    }, [])

    return (
        // komponen yang akan dirender
        <div className='details-container'>
            {/* cek loading */}
            {state.loading ? <Loading /> : <>
                <div className='image' style={style}></div>
                <div className='details-details'>
                    <table border='1'>
                        <tr>
                            <td>
                                title
                        </td>
                            <td>
                                {state.data.title}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                score
                        </td>
                            <td>
                                {state.data.score}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                rank
                        </td>
                            <td>
                                {state.data.rank}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                episodes
                        </td>
                            <td>
                                {state.data.episodes}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                synopsis
                        </td>
                            <td>
                                {state.data.synopsis}
                            </td>
                        </tr>

                    </table>
                </div>
            </>}
        </div >
    )
}
