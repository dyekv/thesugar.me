import React from "react";

interface IconProps {
  width?: number;
  height?: number;
}

const PaperPlane: React.FC<IconProps> = (props) => {
  const { width = 16, height = 16, ...others } = props;
  return (
    <svg
      {...others}
      viewBox="0 0 512 512"
      width={width}
      height={height}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      shapeRendering="geometricPrecision"
    >
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/>
    </svg>
  );
};

export default PaperPlane;

