/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';

import Volume from './Volume';
import PadsList from './PadsList';

const Panel = () => {

    const [volume, setVolume] = useState(0.5);
    const [isPlaying, setIsPlaying] = useState(false)
    const [tracksToPlay, setTracksToPlay] = useState([])
    const { pads } = useSelector((state => state.padsModule))

    const audioTracks = [];
    let loopInterval = null;
    let test = null;

    useEffect(() => {
        if (isPlaying) {
            loopInterval = setInterval(() => {
                console.log('LOOP')
                updateTracks()
            }, 4000);
            return () => {
                clearInterval(loopInterval)
                clearInterval(test)
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
        console.log('audioTracks:', audioTracks)
        playTracks()
    };

    const playTracks = () => {
        tracksToPlay.forEach((track) => {
            console.log('track:', track)
            track.play()
        })
    };

    const stopTracks = () => {
        setIsPlaying(false);
        tracksToPlay.forEach((track) => {
            track.pause()
        })
        console.log('CLEAR')
        return () => {
            clearInterval(loopInterval)
            clearInterval(test)
        };
    };


    console.log('RENDER')
    return (

        <div className={`panel-container ${isPlaying && "is-playing"} `}>
            <div className="headline">
                <h1>SUPER<br />
                    <span>
                        L
                        <button onClick={() => updateTracks()}
                            className={`headline-btn1 ${isPlaying && "white"}`}>
                            <PlayCircleRoundedIcon sx={{ fontSize: 35 }} />
                        </button>
                        <button onClick={() => stopTracks()}
                            className={`headline-btn2 ${isPlaying && "white"}`} >
                            <PauseCircleRoundedIcon sx={{ fontSize: 35, }} />
                        </button>
                        PER
                    </span></h1>
            </div>
            {isPlaying && (
                <>
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                </>
            )}
            <PadsList isPlaying={isPlaying} setIsPlaying={setIsPlaying} volume={volume} />
            <Volume volume={volume} setVolume={setVolume} />
        </div>
    )
}

export default Panel
