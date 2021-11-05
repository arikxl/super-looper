/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Pad from './Pad';

import { pads } from '../data/data'

const PadsList = ({ isPlaying, volume, setIsPlaying }) => {

    const [tracksToPlay, setTracksToPlay] = useState([]);
    const [waitingListTracks, setWaitingListTracks] = useState(tracksToPlay);

    useEffect(() => {
        let interval = null;
        let test = null;
        console.log('isPlaying:', isPlaying)

        if (isPlaying && tracksToPlay.length > 0) {
            playMusic();
            // interval = setInterval(() => {
            //     playMusic();
            // }, 7000)
            // test = setInterval(() => {
            //     updateTracks();
            // }, 9000)
        } else {
            stopMusic();
        }
        return () => clearInterval(interval, test);

    }, [isPlaying, volume, waitingListTracks])

    const playMusic = () => {
        if (isPlaying) {
            tracksToPlay.forEach(track => {
                track.current.play()
                track.current.volume = volume;
            })
            console.log('loop');
            console.log('tracksToPlay:', tracksToPlay)

            updateTracks();
        }
    };

    const stopMusic = () => {
        setIsPlaying(false);
        tracksToPlay.forEach(track => {
            track.current.pause();
        });
    };

    const updateTracks = () => {
        if (isPlaying && waitingListTracks.length > 0) {
            setTracksToPlay(...tracksToPlay, waitingListTracks);
        }
        // console.log('tracksToPlay:', tracksToPlay)
        // console.log('waitingListTrack:', waitingListTracks)
    }

    return (
        < div className="pad-list-container" >
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
