import React from 'react';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

const Volume = ({ volume, setVolume }) => {
    return (
        <div>
            <VolumeOffRoundedIcon />
            <input type="range" step="0.1" value={volume}
                className="volume-input"
                min="0" max="1" 
                onChange={(e) => setVolume(e.target.value)} />
            <VolumeUpRoundedIcon />
        </div>
    );
};

export default Volume;
