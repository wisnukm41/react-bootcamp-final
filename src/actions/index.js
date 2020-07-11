// inisiasi beberapa action dasar
export const request = () => {
    return {
        'type': 'DATA_REQ'
    }
}

export const response = (data) => {
    return {
        'type': 'DATA_RES',
        'payload': data
    }
}

export const error = (error) => {
    return {
        'type': 'ERROR',
        'payload': error
    }
}

// inisiasi action untuk request API
export const dataRequest = (url) => {
    return async function (dispatch) {
        dispatch(request());

        // ambil data dari jikan API, sesaui dengan url
        const data = await fetch(`https://api.jikan.moe/v3/${url}`).catch(err => dispatch(error(err)))
            .then(async res => await res.json())
            .catch(err => dispatch(error(err)));

        // melakukan dispatch data, sesuai dengan respon dari api
        if (url.startsWith('top')) {
            dispatch(response(data.top));
        } else if (url.startsWith('search')) {
            dispatch(response(data.results))
        } else {
            const obj = {
                image_url: data.image_url,
                title: data.title,
                score: data.score,
                rank: data.rank,
                episodes: data.episodes,
                synopsis: data.synopsis,
            }

            dispatch(response(obj));
        }


    }
}