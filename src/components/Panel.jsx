/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';

import Volume from './Volume';
import PadsList from './PadsList';
import Recorder from './Recorder';

const Panel = () => {

    const [volume, setVolume] = useState(0.5);
    const [recording, setRecording] = useState('');
    const [isPlaying, setIsPlaying] = useState(false)
    const [isBlinking, setIsBlinking] = useState(false)
    const [tracksToPlay, setTracksToPlay] = useState([])
    const { pads } = useSelector((state => state.padsModule))

    const audioTracks = [];
    let loopInterval = null;

    useEffect(() => {
        if (isPlaying) {
            playTracks()
            loopInterval = setInterval(() => {
                updateTracks()
                playTracks()
            }, 8000);
            return () => {
                clearInterval(loopInterval)
            };
        }
    }, [tracksToPlay, isPlaying]);

    useEffect(() => {
        tracksToPlay.forEach((track) => {
            track.volume = volume
        })
    }, [volume]);

    const updateTracks = () => {
        if (!pads.length) return
        setIsPlaying(true);
        pads.forEach((pad) => {
            if (pad.isActive) {
                audioTracks.push(new Audio(pad.sound));
                setTracksToPlay(audioTracks);
            }
        });
    };

    const playTracks = () => {
        tracksToPlay.forEach((track) => {
            track.play()
        })
        setRecording(tracksToPlay)
    };

    const stopTracks = () => {
        setIsPlaying(false);
        tracksToPlay.forEach((track) => {
            track.pause()
        })
        return () => {
            clearInterval(loopInterval)
        };
    };

    return (

        <div className={`panel-container ${isPlaying && "is-playing"} `}>
            <div className="headline">
                <h1>SUPER<br />
                    <span>
                        L
                        <button onClick={() => { playTracks(); updateTracks() }}
                            className={`headline-btn1
                            ${isBlinking && "blink"} ${isPlaying && "white"}`}>
                            <PlayCircleRoundedIcon sx={{ fontSize: 35 }} />
                        </button>
                        <button onClick={() => stopTracks()}
                            className={`headline-btn2 ${isPlaying && "white"}`} >
                            <PauseCircleRoundedIcon sx={{ fontSize: 35, }} />
                        </button>
                        PER
                    </span>
                </h1>
            </div>
            {isPlaying && (
                <>
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                </>
            )}
            <PadsList isPlaying={isPlaying} setIsBlinking={setIsBlinking}
                setIsPlaying={setIsPlaying} volume={volume} />
            <Volume volume={volume} setVolume={setVolume} />
            {recording && (
                <Recorder recording={recording} setRecording={setRecording} />
            )}
        </div>
    );
};

export default Panel;
