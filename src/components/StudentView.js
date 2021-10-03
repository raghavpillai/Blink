import React from "react";
import avatar from '../images/emptyAvatar.png';
import math from '../images/math.jpeg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from './useAgora';
import MediaPlayer from './MediaPlayer';
import { useHistory } from "react-router-dom";
import { LocalCafe, ViewSidebar } from "@mui/icons-material";
import VideoApp from "../components/VideoApp/VideoApp";
import MessageWrapper from "./ChatApp/MessageWrapper";

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });


export function StudentView() {
    const [appid, setAppid] = useState('');
    const [token, setToken] = useState('');
    const [channel, setChannel] = useState('');
    const {
        localAudioTrack, localVideoTrack, leave, join, joinState, remoteUsers
    } = useAgora(client);

    const history = useHistory();

    const routeChange = () => {
        let path = `organizations`;
        localAudioTrack.close();
        localVideoTrack.close();
        history.push(path);
    }

    return (
        <div className="flex justify-between h-screen">
            <section className="bg-blue-400 h-full w-4/5">
                <div className="border-black border-2 border-solid h-4/5 overflow-hidden">
                    <VideoApp></VideoApp>
                </div>
                <div className="bg-red-200 border-solid h-1/5 flex justify-between">
                    <div className="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                    <div ssName="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                    <div className="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                    <div className="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                    <div className="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                    <div className="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                    <div className="bg-yellow-200 h-48 w-48"><img className="object-scale-down" src={avatar} alt="avatar" /></div>
                </div>
            </section>
            <aside className="bg-blue-200 h-screen w-1/5">
                <h2 className="text-3xl text-center m-3">Class Chat</h2>
                <MessageWrapper></MessageWrapper>


            </aside>
        </div>
    )
}

export default StudentView;