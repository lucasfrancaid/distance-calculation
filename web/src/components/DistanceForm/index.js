import React, { useState } from 'react';
import { FaWalking, FaCar, FaBicycle } from "react-icons/fa";

function DistanceForm( { onSubmit } ) {
    const [origins, setOrigins] = useState('')
    const [destinations, setDestinations] = useState('')
    const [mode, setMode] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            origins,
            destinations,
            mode,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="origins">Origin</label>
                <input
                    name="origins"
                    id="origins"
                    required
                    value={origins}
                    onChange={e => setOrigins(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="destinations">Destiny</label>
                <input
                    name="destinations"
                    id="destinations"
                    required
                    value={destinations}
                    onChange={e => setDestinations(e.target.value)}
                />
            </div>

            <div className="input-block">
             <ul>
                 <button type="button" className={mode === "walking" ? "btn-icon-active" : "btn-icon"} name="walking" id="walking" value="walking" onClick={e => setMode("walking")}><FaWalking/></button>
                 <button type="button" className={mode === "driving" ? "btn-icon-active" : "btn-icon"} name="driving" id="driving" value="driving" onClick={e => setMode("driving")}><FaCar/></button>
                 <button type="button" className={mode === "bicycling" ? "btn-icon-active" : "btn-icon"} name="bicycling" id="bicycling" value="bicycling" onClick={e => setMode("bicycling")}><FaBicycle/></button>
             </ul>
            </div>

            <button type="submit">Go</button>
        </form>
    )
}

export default DistanceForm;