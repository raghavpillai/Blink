import { useState } from "react";
import { useClient } from "./settings";
import { Grid } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <div className="flex justify-between border-black border-solid border-2 w-1/4">
      <button
        onClick={() => mute("audio")}
      >
        {trackState.audio ? <MicIcon /> : <MicOffIcon />}
      </button>
      <button
        onClick={() => mute("video")}
      >
        {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
      </button>
      <button
        onClick={() => leaveChannel()}
      >
        Leave
        <ExitToAppIcon />
      </button>
    </div>
  );
}
