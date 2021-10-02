import { useState } from "react";
import VideoCall from "./VideoCall";

function VideoApp() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <button
          onClick={() => setInCall(true)}
        >
          Join Call
        </button>
      )}
    </div>
  );
}

export default VideoApp;
