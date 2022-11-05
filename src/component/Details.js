import React from 'react'
import { useParams } from 'react-router-dom'


const Details = (props) => {
    const params = useParams();
    return (
        <div id="details">
            this is details
            <br/>
            {params.cropname}
        </div>
    )
}

export default Details
