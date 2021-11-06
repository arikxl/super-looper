/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pad from './Pad';
import { loadPads } from '../store/actions/pedsActions';


const PadsList = () => {
    const dispatch = useDispatch();
    const { pads } = useSelector((state => state.padsModule));
    useEffect(() => dispatch(loadPads()), [dispatch])

    return (
        < div className="pad-list-container" >
            <div className="pad-list">
                {pads.map((pad, idx) => (
                    <Pad pad={pad} key={idx}/>
                ))}
            </div>
        </div >
    );
};

export default PadsList;
