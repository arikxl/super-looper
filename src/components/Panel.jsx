import React, { useState } from 'react';
// import PlayCircleRoundedIcon from '@material-ui/icons/PlayCircleRoundedIcon';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';





import PadsList from './PadsList';
import Volume from './Volume';


const Panel = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);



    return (
        <div className={`panel-container ${isPlaying && "is-playing"} `}>
            <div className="headline">
                <h1>SUPER<br />
                    <span>
                        L
                        <button onClick={() => setIsPlaying(true)}
                            className={`headline-btn1 ${isPlaying && "white"}`}>
                            <PlayCircleRoundedIcon sx={{ fontSize: 35 }} />
                        </button>
                        <button onClick={() => setIsPlaying(false)}
                            className={`headline-btn2 ${isPlaying && "white"}`} >
                            <PauseCircleRoundedIcon sx={{ fontSize: 35, }} />
                        </button>
                        PER
                    </span></h1>
            </div>
            {isPlaying && (
                <>
                    <div class="bg"></div>
                    <div class="bg bg2"></div>
                    <div class="bg bg3"></div>
                </>
            )}
            <PadsList isPlaying={isPlaying} setIsPlaying={setIsPlaying} volume={volume} />
            <Volume volume={volume} setVolume={setVolume} />
        </div>
    )
}

export default Panel
