import { useEffect, useState } from "react";
import './VerticalArrow.css';

export default function VerticalArrow({ onOpen }) {
  const [transform, setTransform] = useState(180);

  useEffect(() => {
    if (onOpen) {
      setTransform(0);
    } else {
      setTransform(180);
    }
  }, [onOpen]);

  return (
    <svg
    className="vetical"
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${transform})`}
    >
      <path
        d="M11 6L6 1L1 6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
