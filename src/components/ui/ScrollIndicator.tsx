export default function ScrollIndicator() {
    return (
        <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 60 90" width="36" height="54" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="pill-clip">
                        <rect x="6" y="6" width="38" height="68" rx="24"/>
                    </clipPath>
                </defs>

                {/* Pill outline */}
                <rect x="6" y="6" width="40" height="68"
                    rx="24" fill="none" stroke="white" strokeWidth="3.5"/>

                {/* Sliding dot */}
                <rect x="22" y="16" width="6" height="20" rx="4"
                    fill="white" clipPath="url(#pill-clip)">
                    <animate
                        attributeName="y"
                        values="16;46;46;16;16"
                        keyTimes="0;0.35;0.351;0.352;1"
                        calcMode="spline"
                        keySplines="0.4 0 0.6 1; 0 0 1 1; 0 0 1 1; 0.4 0 0.6 1"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;1;0;0;0;1"
                        keyTimes="0;0.33;0.35;0.352;0.82;1"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </rect>
            </svg>
        </div>
    );
}