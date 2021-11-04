import React from 'react'

const Volume = ({volume, setVolume}) => {
    return (
        <div>
            <h3>Volume</h3>
            <input type="range" step="0.01" value={volume}
            className="volume-input"
            min="0" max="1"
            onChange={(e) => setVolume(e.target.value)} />
        </div>
    );
};

export default Volume;
