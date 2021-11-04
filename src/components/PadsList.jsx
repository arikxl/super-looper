import React, { useState, useEffect } from 'react'
import Pad from './Pad';

import { pads } from '../data/data'

const PadsList = ({ isPlaying, volume, setIsPlaying }) => {

    const [tracksToPlay, setTracksToPlay] = useState([]);

    useEffect(() => {
        if (isPlaying) {
            tracksToPlay.forEach(track => {
                track.current.play()
                track.current.volume = volume;
            })
        }
        else {
            tracksToPlay.forEach(track => {
                track.current.pause()
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, volume])

    return (
        < div className="pad-list-container" >
            {console.log('tracksToPlay:', tracksToPlay)}
            <div className="pad-list">
                {pads.map((pad) => (
                    <Pad pad={pad} key={pad.id}
                        isPlaying={isPlaying}
                        setTracksToPlay={setTracksToPlay} />
                ))}
            </div>
        </div >
    );
};

export default PadsList;
