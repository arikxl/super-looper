import React, { useEffect, useRef, useState } from 'react'

const Pad = ({ pad, isPlaying, setTracksToPlay, setWaitingListTracks }) => {

    const audioRef = useRef(null);
    const [isActive, setIsActive] = useState(false);


    const makeActive = () => {
        if (!isPlaying) {
            if (!isActive) {
                setTracksToPlay(array => [...array, audioRef]);
            } else {
                setTracksToPlay(array => array.filter(ref => ref !== audioRef))
            }
        }

        if (isPlaying) {
            if (isActive) {
                setWaitingListTracks(array => [...array, audioRef]);
            } else {
                setWaitingListTracks(array => array.filter(ref => ref !== audioRef))
            }
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
                onClick={() => makeActive()}>
                {pad.name}
                <audio src={pad.sound} ref={audioRef} />
            </button>
        </div>
    )
}

export default Pad
