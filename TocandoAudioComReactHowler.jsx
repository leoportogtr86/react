import React, { useState } from 'react'
import ReactHowler from 'react-howler'
import Sound from './assets/helicoptero-som.mp3'


export default props=>{

    const[play, setPlay] = useState(false)


    return (

        <div>

            <ReactHowler src = {Sound} playing = {true}/>
        </div>
    )



}
