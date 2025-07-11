interface DotProps {
  color?: string;
  size?: number;
  spacing?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Dot({
  color = "#cacaca",
  size = 1,
  spacing = 100,
  children,
}: DotProps) {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `calc(${spacing} * ${size}px) calc(${spacing} * ${size}px)`,
      }}
      className="items-center"
    >
      {children}
    </div>
  );
}
