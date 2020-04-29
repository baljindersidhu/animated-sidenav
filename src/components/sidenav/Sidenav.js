import React from 'react';
import './Sidenav.css';

export default function Sidenav(){
    return (
        <div className="Sidenav">
            <div className="Row StatusBar">
                <div className="Action"></div>
                <div className="FillParent"></div>
                <div className="Action"></div>
                <div className="FillParent"></div>
                <div className="Action"></div>
            </div>
        </div>
    );
}