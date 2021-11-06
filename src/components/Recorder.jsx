import React, { useState } from 'react';

const Recorder = ({ recording, setRecording }) => {
    
    const playRecording = () => {
        console.log('recording:', recording)
        recording.forEach((track) => {
            track.play()
        })
    }

    return (
        <div>
            <button onClick={() => playRecording()}>PLay</button>

            <button onClick={() =>setRecording('')}>Clear</button>
        </div>
    )
}

export default Recorder
