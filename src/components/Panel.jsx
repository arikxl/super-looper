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
                    L
                    <button onClick={() => setIsPlaying(true)}>▶</button>
                    <button onClick={() => setIsPlaying(false)}>⏸</button>
                    PER</h1>
            </div>
            <PadsList isPlaying={isPlaying} setIsPlaying={setIsPlaying} volume={volume}/>
            <Volume volume={volume} setVolume={setVolume}/>
        </div>
    )
}

export default Panel
