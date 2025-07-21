// components/HexagonButton.tsx
import React from "react";

interface HexagonButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    textClassName?: string;
}

const HexagonButton: React.FC<HexagonButtonProps> = ({
                                                         text,
                                                         onClick,
                                                         className = "",
                                                         textClassName = "text-white text-lg font-semibold",
                                                     }) => {
    return (
        <button
            onClick={onClick}
            className={`relative inline-block p-0 border-0 bg-transparent cursor-pointer ${className}`}
            aria-label={text}
        >
            <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 234.51 79"
                width="234"
                height="79"
                className="block"
            >
                <defs>
                    <style>
                        {`
              .cls-1 { fill: #ffe66d; }
              .cls-2 { fill-rule: evenodd; }
              .cls-2, .cls-3 { fill: #0066e0; }
              .cls-4 {
                fill: none;
                stroke: #03083a;
                stroke-linecap: round;
                stroke-width: 2px;
              }
            `}
                    </style>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <polygon className="cls-2" points="29.57 78.67 29.67 78.74 29.57 78.74 29.57 78.67" />
                        <polygon className="cls-2" points="29.67 .26 29.57 .33 29.57 .26 29.67 .26" />
                        <polygon className="cls-3" points="199 .26 199 78.74 29.67 78.74 29.57 78.67 0 59.25 0 19.75 29.57 .33 29.67 .26 199 .26" />
                        <polygon className="cls-3" points="29.67 78.74 30.52 78.74 30.07 79 29.67 78.74" />
                        <polygon className="cls-3" points="30.52 .26 29.67 .26 30.07 0 30.52 .26" />
                        <path className="cls-1" d="M199,0l35.51,19.75v39.5l-35.51,19.75-35.51-19.75V19.75L199,0Z" />
                        <path className="cls-4" d="M187.18,29.18h21.64M208.82,29.18v21.64M208.82,29.18l-21.64,21.64" />
                    </g>
                </g>
            </svg>

            {/* Overlay text */}
            <span
                className={`absolute top-0 left-0 w-[199px] h-full flex items-center justify-center pointer-events-none ${textClassName}`}
                style={{ marginLeft: "30px" }} // To offset for left polygon
            >
        {text}
      </span>
        </button>
    );
};

export default HexagonButton;
