import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPlayList } from '../store/actions/pedsActions';

const Pad = ({ pad, setIsBlinking }) => {
    const [isActive, setIsActive] = useState(false);
    const audioRef = useRef(null);
    const dispatch = useDispatch();

    const toggleActive = () => {
        setIsBlinking(true)
        setIsActive( !isActive);
        pad.isActive = !pad.isActive;
        dispatch(addPlayList(pad));
    }
    
    return (
        <div className="pad">
            <button className={`pad-btn ${isActive && "active"}`}
                onClick={() => toggleActive()} >
                {pad.name}
                <audio src={pad.sound} ref={audioRef} />
            </button>
        </div>
    );
};

export default Pad;
