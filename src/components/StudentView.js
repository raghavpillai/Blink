import React from "react";
import avatar from '../images/emptyAvatar.png';
import mike from '../images/mike.jpeg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from './useAgora';
import MediaPlayer from './MediaPlayer';
import { useHistory } from "react-router-dom";
import { LocalCafe } from "@mui/icons-material";

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });


export function StudentView(){
    const [ appid, setAppid ] = useState('');
    const [ token, setToken ] = useState('');
    const [ channel, setChannel ] = useState('');
    const {
        localAudioTrack, localVideoTrack, leave, join, joinState, remoteUsers
    } = useAgora(client);

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `organizations`; 
        localAudioTrack.close();
        localVideoTrack.close();
        history.push(path);
    }

    return(
        <div className = "flex flex-wrap flex-grow max-h-screen overflow-hidden">

            <section id="mainContent" className="flex flex-wrap lg:w-4/5 w-3/4">
                
                <div className="w-full h-4/5">
                    <div className="h-full bg-no-repeat bg-cover"style={{ backgroundImage: `url(${mike})` }}>
                        <div className='button-group'>
                            <button id='join' type='button' className='px-3 py-2 bg-green-300 text-sm mx-4 mt-3 rounded-md'  disabled={joinState} onClick={() => {join(appid, channel, token)}}>Join</button>
                            {/* <button id='leave' type='button' className='px-3 py-2 bg-red-400 text-sm mt-3 rounded-md' disabled={!joinState} onClick={() => {leave()}}>Leave</button> */}
                            <button id='leave' type='button' className='px-3 py-2 bg-red-400 text-sm mt-3 rounded-md'  onClick={routeChange}>Leave</button>
                            {/* <button id='leave' type='button' className="px-3 py-2 bg-red-400 text-sm mt-3 rounded-md"> */}
                                {/* <Link to="/organizations">Leave</Link>
                            </button> */}
                        </div>
                    </div>
                    <div className='player-container'>
                        <div className='local-player-wrapper absolute transform -translate-y-20 -translate-x-20 scale-75'>
                        <p className='local-player-text'>{localVideoTrack && `localTrack`}{joinState && localVideoTrack ? `(${client.uid})` : ''}</p>
                        <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined}></MediaPlayer>
                        </div>
                        {remoteUsers.map(user => (<div className='remote-player-wrapper' key={user.uid}>
                            <p className='remote-player-text'>{`remoteVideo(${user.uid})`}</p>
                            <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack}></MediaPlayer>
                        </div>))}
                    </div>
                </div>
                <div className="w-full h-1/5 bg-yellow-200 flex grid grid-cols-6">
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    {/* <img className="object-scale-down" src={avatar} alt="avatar" /> */}
                    {/* <img className="object-scale-down" src={avatar} alt="avatar" /> */}
                </div>
            </section>

            <section
            id="ghost"
            className="flex justify-center h-screen sticky top-0 right-0 lg:w-1/5 w-1/4 bg-blue-200"
            ></section>

            <section
                id="Sidebar"
                className="flex justify-center items-end h-screen fixed top-0 right-0 border-l-2 border-gray-600 lg:w-1/5 w-1/4 text-xs lg:text-sm text-center"
            >
                <form className = "pb-4 w-full">
                    <input className = "w-11/12 rounded-sm text-lg"type="text" placeholder="Message"/>
                </form>
            </section>
        </div>
    )
}

export default StudentView;