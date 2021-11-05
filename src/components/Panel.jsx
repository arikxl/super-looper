import React, { useState } from 'react';

import PadsList from './PadsList';
import Volume from './Volume';


const Panel = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    

    return (
        <div className={`panel-container ${isPlaying && "is-playing"} `}>
            <div className="headline">
                <h1>SUPER<br />
                    <span>
                        L
                        <button className="headline-btn" onClick={() => setIsPlaying(true)}>▶</button>
                        <button className="headline-btn" onClick={() => setIsPlaying(false)}>⏸</button>
                        PER
                    </span></h1>
            </div>
            <PadsList isPlaying={isPlaying} setIsPlaying={setIsPlaying} volume={volume}/>
            <Volume volume={volume} setVolume={setVolume}/>
        </div>
    )
}

export default Panel
