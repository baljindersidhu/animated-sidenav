import React, { useState } from 'react';
import './Sidenav.css';

export default function Sidenav(){

    const [minimized, setMinimized] = useState(true);
    let actionLabels = ["Home", "Market Overview", "Security", "Industries", "Screener", "Chat"];
    let actionItems = ["grid", "bar-chart", "shield", "pantone", "cast", "message-circle"];
    actionItems = actionItems.map(item => (item + "-outline"));

    let actions = actionItems.map((icon, index) => <ActionItem minimized={minimized} icon={icon} key={index} label={actionLabels[index]}/>);


    return (
        <div className="Sidenav PositionRelative" data-minimized={minimized}>
            <div className="Row StatusBar">
                <div className="Action"></div>
                <div className="FillParent"></div>
                <div className="Action"></div>
                <div className="FillParent"></div>
                <div className="Action"></div>
            </div>

            <BrandName minimized={minimized} />

            <ActionItem minimized={minimized} icon="search-outline" label="Search"/>
            {actions}

            <div className="PositionAbsolute Row CenterV CenterH ToggleMode" 
                 data-minimized={minimized}
                 onClick={() => setMinimized(!minimized)}>
                <i  data-eva="chevron-right-outline" 
                    data-eva-fill="white"></i>
            </div>

        </div>
    );
}

function BrandName(props){
    return (
        <div className="Row Brand">
            <div className="PositionRelative BrandIcon"></div>
            <div className="BrandName" data-minimized={props.minimized}>stocklabs</div>
        </div>
    );
}

function ActionItem(props){
    return (
        <div className="Row CenterV ActionItem PositionRelative" data-minimized={props.minimized}>
            <div className="PositionRelative ActionIcon">
                <i  data-eva={props.icon} 
                    data-eva-fill="white" 
                    data-eva-animation="shake"></i>
            </div>
            <div className="PositionRelative ActionName" data-minimized={props.minimized}>{props.label}</div>
        </div>
    );
}