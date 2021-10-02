import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "79bfd2935ce0436e83cd173585a8a29f";
const token = "00679bfd2935ce0436e83cd173585a8a29fIABrzEO6r1EhFjqaCWwIw4Z9aKANe3O+kn0K0Dxgs7Z3/wx+f9gAAAAAEAApikciUSBaYQEAAQBRIFph";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
