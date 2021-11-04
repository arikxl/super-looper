import React, { useEffect, useRef, useState } from 'react'

const Pad = ({ pad, isPlaying, setTracksToPlay  }) => {
// console.log('pad:', pad)

    const audioRef = useRef(null);
    const [isActive, setIsActive] = useState(false);


    const playMusic = () => {
        if (!isActive) {
            setTracksToPlay(array => [...array, audioRef]);
        } else {
            setTracksToPlay(array => array.filter(ref => ref !== audioRef))
        }
        setIsActive(!isActive);
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
                <audio loop src={pad.sound} ref={audioRef} />
            </button>
        </div>
    )
}

export default Pad
