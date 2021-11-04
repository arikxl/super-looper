import React, { useEffect, useRef, useState } from 'react'

const Pad = ({ pad, isPlaying, volume, setTracksToPlay }) => {

    // const audioTrack = useRef(null);
    const [isActive, setIsActive] = useState(false);


    const playMusic = () => {
        setIsActive(!isActive);
        if (!isActive) {
            setTracksToPlay(array => [...array, pad.sound]);
        } else {
            setTracksToPlay(array => array.filter(n => n !== pad.sound))
        }
        // audioTrack.current.play()
        // audioTrack.current.pause()
    }

    // useEffect(() => {
    //     if (isPlaying) {
    //         audioTrack.current.play()
    //         audioTrack.current.volume = volume;
    //     } else {
    //         audioTrack.current.pause()
    //     }
    // })


    return (
        <div className="pad">
            <button className={`css-button-3d--sand ${isActive && "active"} `}
                onClick={() => playMusic()}>
                {pad.name}
                {/* <audio src={pad.sound} ref={audioTrack} /> */}
            </button>
        </div>
    )
}

export default Pad
