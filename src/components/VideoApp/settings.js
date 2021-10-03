import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "79bfd2935ce0436e83cd173585a8a29f";
const token = "00679bfd2935ce0436e83cd173585a8a29fIAC6laYYqcqc+1fZv7cyLN6U4S5BfsBQxV5ElM8eQ+2lL2TNKL8AAAAAEAApikci8zdaYQEAAQDzN1ph";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
