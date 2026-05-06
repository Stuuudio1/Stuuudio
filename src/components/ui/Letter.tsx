const WIDE = "DrukTextWide, sans-serif";
const COND = "DrukCond, sans-serif";

export { WIDE, COND };

export function Letter({
    char,
    font,
    weight,
}: {
    char: string;
    font: string;
    weight: number;
}) {
    return (
        <span
            style={{
                fontFamily: font,
                fontWeight: weight,
                display: "inline-block",
                lineHeight: 0.82,
                verticalAlign: "baseline",
            }}
        >
            {char}
        </span>
    );
}