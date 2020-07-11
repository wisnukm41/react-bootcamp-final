import React, { Component } from 'react'

// footer komponen
export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div>
                    &copy; Copyright 2020
                </div>
                <div>
                    Crafted by : Wisnu M R <br />
                    Powered by : <a href='https://jikan.docs.apiary.io/'>Jikan</a>
                </div>
            </div>
        )
    }
}
