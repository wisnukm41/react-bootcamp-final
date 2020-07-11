import React from 'react';
import { Link } from 'react-router-dom';


export default function AnimeCard(props) {

    // Style untuk mengubah background image, dari API
    const style = {
        background: `url(${props.data.image_url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }

    return (
        // Link dari untuk mengakses tiap komponen agar dapat dilihat detailsnya
        <Link to={`/details/${props.data.mal_id}`} >
            <div className='content-items' style={style}>
                <div className='content-body'>
                    <span>{props.data.title}</span>
                </div>
            </div >
        </Link>
    )
}
