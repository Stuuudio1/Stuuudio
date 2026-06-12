// hooks/useVideoState.ts
import { useEffect, useRef, useState } from "react";

export type VideoStatus = "loading" | "ready" | "error";

export function useVideoState() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [status, setStatus] = useState<VideoStatus>("loading");

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        // Already has data (e.g. cached)
        if (v.readyState >= 3) setStatus("ready");

        const onReady = () => setStatus("ready");
        const onError = () => setStatus("error");
        const onStalled = () => setStatus("loading");
        const onWaiting = () => setStatus("loading");
        const onPlaying = () => setStatus("ready");

        v.addEventListener("canplay", onReady);
        v.addEventListener("error", onError);
        v.addEventListener("stalled", onStalled);
        v.addEventListener("waiting", onWaiting);
        v.addEventListener("playing", onPlaying);

        return () => {
            v.removeEventListener("canplay", onReady);
            v.removeEventListener("error", onError);
            v.removeEventListener("stalled", onStalled);
            v.removeEventListener("waiting", onWaiting);
            v.removeEventListener("playing", onPlaying);
        };
    }, []);

    return { videoRef, status };
}