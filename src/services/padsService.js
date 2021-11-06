import bass from '../audio/Bass Warwick heavy funk groove on E 120 BPM.mp3';
import GrooveB from '../audio/GrooveB_120bpm_Tanggu.mp3';
import funkBeats from '../audio/120_future_funk_beats_25.mp3';
import SilentStar from '../audio/SilentStar_120_Em_OrganSynth.mp3';
import PAS3GROOVE1 from '../audio/PAS3GROOVE1.03B.mp3';
import StompySlosh from '../audio/FUD_120_StompySlosh.mp3';
import MazePolitics from '../audio/MazePolitics_120_Perc.mp3';
import electricGuitar from '../audio/electric guitar coutry slide 120bpm - B.mp3';
import stutterBreakBeats from '../audio/120_stutter_breakbeats_16.mp3';

const getPads = () => {
    return  [
        {
            name: 'Funk Beats',
            sound: funkBeats,
            isActive: false
        },
        {
            name: 'Break Beats',
            sound: stutterBreakBeats,
            isActive: false
        },
        {
            name: 'Bass',
            sound: bass,
            isActive: false
        },
        {
            name: 'Electric Guitar',
            sound: electricGuitar,
            isActive: false
        },
        {
            name: 'Stompy Slosh',
            sound: StompySlosh,
            isActive: false
        },
        {
            name: 'Groove B',
            sound: GrooveB,
            isActive: false
        },
        {
            name: 'Maze Politics',
            sound: MazePolitics,
            isActive: false
            },
        {
            name: 'Groove',
            sound: PAS3GROOVE1,
            isActive: false
        },
        {
            name: 'Silent Star',
            sound: SilentStar,
            isActive: false
        }
    ]

}

export const pedsService = {getPads} ;