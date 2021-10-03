import { useState } from "react";
import VideoCall from "./VideoCall";

function VideoApp() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="border-2 border-green-400 border-solid h-screen">
      {inCall ? (
        <div className="h-full w-full">
          <VideoCall setInCall={setInCall} />
        </div>
      ) : (
        <button onClick={() => setInCall(true)} className="bg-green-400 px-4 py-2 rounded">
          Join Call
        </button>
      )}
    </div>
  );
}

export default VideoApp;
