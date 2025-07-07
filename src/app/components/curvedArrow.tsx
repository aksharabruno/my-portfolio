export default function CurvedArrow() {
  return (
    <div className="flex justify-center my-8">
      <svg
        width="200"
        height="120"
        viewBox="0 0 300 300"
        className="text-blue-400"
      >
        <path
          d="M 100 300 Q 200 300 300 0"
          stroke="white"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}
