// components/ui/VideoStatusOverlay.tsx

type Props = { status: "loading" | "ready" | "error" };

export default function VideoStatusOverlay({ status }: Props) {
    if (status === "ready") return null;

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
            {status === "loading" ? (
                <div className="flex flex-col items-center gap-3">
                    {/* Spinner */}
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                    {/* <p className="text-white/50 text-xs uppercase tracking-widest">Loadi</p> */}
                </div>
            ) : (
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                    {/* No signal icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M1 1l22 22" />
                        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                        <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
                        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <circle cx="12" cy="20" r="1" fill="white" />
                    </svg>
                    <p className="text-white/70 text-sm font-medium">Video unavailable</p>
                    <p className="text-white/40 text-xs">Check your connection and refresh</p>
                </div>
            )}
        </div>
    );
}