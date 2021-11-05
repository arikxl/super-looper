/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Pad from './Pad';

import { pads } from '../data/data'

const PadsList = ({ isPlaying, volume, setIsPlaying }) => {

    const [tracksToPlay, setTracksToPlay] = useState([]);
    const [waitingListTracks, setWaitingListTracks] = useState(tracksToPlay);

    useEffect(() => {
        let interval = null;
        console.log('isPlaying:', isPlaying)

        if (isPlaying && tracksToPlay.length > 0) {
            interval = setInterval(() => {
                playMusic();
                setTimeout(() => {
                    updateTracks()
                }, 3000)
            }, 3000)
        } else {
            stopMusic();
        }

        return () => clearInterval(interval);
    }, [isPlaying, volume, waitingListTracks])

    const playMusic = () => {
        tracksToPlay.forEach(track => {
            track.current.play()
            track.current.volume = volume;
        })
        console.log('loop');
    };

    const stopMusic = () => {
        setIsPlaying(false);
        tracksToPlay.forEach(track => {
            track.current.pause();
        });
        setTracksToPlay([...tracksToPlay]);
    };

    const updateTracks = () => {
            if (isPlaying && waitingListTracks.length > 0) {
                setTracksToPlay(...tracksToPlay, waitingListTracks);
                // stopMusic();
                // playMusic();
            }
            console.log('tracksToPlay:', tracksToPlay)
            console.log('waitingListTrack:', waitingListTracks)
            // setWaitingListTracks([]);
    }

    return (
        < div className="pad-list-container" >
            {/* {console.log('tracksToPlay:', tracksToPlay)} */}
            {/* {console.log('waitingListTrack:', waitingListTracks)} */}
            <div className="pad-list">
                {pads.map((pad) => (
                    <Pad pad={pad} key={pad.id}
                        isPlaying={isPlaying}
                        setTracksToPlay={setTracksToPlay}
                        setWaitingListTracks={setWaitingListTracks} />
                ))}
            </div>
        </div >
    );
};

export default PadsList;
