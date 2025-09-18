interface StarLogoProps {
  className?: string;
}

const StarLogo = ({ className = "h-8 w-8" }: StarLogoProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10 L61.8 38.2 L90 38.2 L68.1 55.9 L79.9 84.1 L50 66.4 L20.1 84.1 L31.9 55.9 L10 38.2 L38.2 38.2 Z"
        fill="currentColor"
      />
      <path
        d="M45 30 Q45 25 50 25 Q55 25 55 30 Q55 35 60 40 Q60 45 55 50 Q55 55 50 55 Q45 55 45 50 Q40 45 40 40 Q40 35 45 30 Z"
        fill="white"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        className="text-2xl font-bold"
        fill="white"
        style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}
      >
        S
      </text>
    </svg>
  );
};

export default StarLogo;