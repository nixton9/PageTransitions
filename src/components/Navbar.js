import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    const [currActivePosition, setCurrActivePosition] = useState(0);
    const [showActiveMarker, setShowActiveMarker] = useState(false);
    const [usingFirstAnimation, setUsingFirstAnimation] = useState(false);
    let activeEl = '';

    useEffect(() => {
        if (activeEl) {
            setShowActiveMarker(true);
            setCurrActivePosition(activeEl.getBoundingClientRect().x);
            setUsingFirstAnimation(!usingFirstAnimation);
        } else {
            setShowActiveMarker(false);
        }
    }, [props.currRoute]);

    const checkRef = (ref) => {
        if (ref && ref.querySelector('a').classList.contains('active')) {
            activeEl = ref;
        }
    }

    const activeMarkerStyles = {
        transform: `translateX(${currActivePosition - 20}px)`,
        display: showActiveMarker ? 'block' : 'none',
        animationName: 'expandActiveMarker',
    }
    
    if (usingFirstAnimation) {
        activeMarkerStyles.animationName = 'expandActiveMarker2'
    }

    return (
        <div className="navbar">
            <NavLink exact to="/"><h1><span>Eduardo</span>Araújo</h1></NavLink>
            <ul className="links">
                <li ref={ref => checkRef(ref)}><NavLink to="/about">About</NavLink></li>
                <li ref={ref => checkRef(ref)}><NavLink to="/expectations">Expectations</NavLink></li>
                <li ref={ref => checkRef(ref)}><NavLink to="/contact">Contact</NavLink></li>
                <li ref={ref => checkRef(ref)}><NavLink to="/freelessons">Try free lesson</NavLink></li>
                <div className="active-marker" style={activeMarkerStyles}></div>
            </ul>
        </div>
    );
};

export default Navbar;