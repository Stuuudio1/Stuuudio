export default function ScrollIndicator() {
    return (
        <svg viewBox="0 0 60 175" width="36" height="70" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="pill-clip">
                    <rect x="6" y="6" width="48" height="78" rx="24"/>
                </clipPath>
            </defs>

            {/* Pill outline */}
            <rect x="6" y="6" width="48" height="78" rx="24" fill="none" stroke="white" strokeWidth="3.5"/>

            {/* Sliding line — faster, completes in 55% of cycle then hides */}
            <rect x="26" y="16" width="8" height="22" rx="4" fill="white" clipPath="url(#pill-clip)">
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

            {/* Chevron 1 — wider and bigger */}
            <polyline points="18,104 30,118 42,104" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0s" repeatCount="indefinite"/>
            </polyline>

            {/* Chevron 2 */}
            <polyline points="18,126 30,140 42,126" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.3s" repeatCount="indefinite"/>
            </polyline>

            {/* Chevron 3 */}
            <polyline points="18,148 30,162 42,148" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
            </polyline>
        </svg>
    )
}