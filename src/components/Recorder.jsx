import React from 'react';

const Recorder = ({ recording, setRecording }) => {

    const playRecording = () => {
        recording.forEach((track) => {
            track.play()
        });
    };

    return (
        <div>
            <button className="play pad-btn"
                onClick={() => playRecording()}>PLay Record</button>

            <button className="clear pad-btn"
                onClick={() => setRecording('')}>Clear Record</button>
        </div>
    );
};

export default Recorder;
