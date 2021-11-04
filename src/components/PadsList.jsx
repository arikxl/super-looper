import React, { useState, useRef, useEffect } from 'react'
import Pad from './Pad';

import { pads } from '../data/data'

const PadsList = ({ isPlaying, volume }) => {

    const [tracksToPlay, setTracksToPlay] = useState([]);
    const audioTrack = useRef(null);

    useEffect(() => {
        if (audioTrack.current) {
            if (isPlaying) {
                audioTrack.current.play()
                audioTrack.current.volume = volume;
            } else {
                audioTrack.current.pause()
            }
        }

    }, [isPlaying, volume, audioTrack])

    return (
        < div className="pad-list-container" >
            {console.log('tracksToPlay:', tracksToPlay)}
            <div className="pad-list">
                {pads.map((pad) => (
                    <Pad pad={pad} key={pad.id}
                        isPlaying={isPlaying}
                        volume={volume}
                        setTracksToPlay={setTracksToPlay} />
                ))}
            </div>


            {tracksToPlay.map((sound) => <audio src={sound} ref={audioTrack} />)}
        </div >
    );
};

export default PadsList;
