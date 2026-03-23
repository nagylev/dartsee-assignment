import type { ThrowDto } from '../../../generated-api';

interface DartWidgetProps {
  throws: ThrowDto[];
}

export function DartWidget({ throws }: DartWidgetProps) {
  const boardNumbers = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
  ];
  const size = 800;
  const boardX = size / 2;
  const boardY = size / 2;
  const boardR = size / 2 - 16;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" className="max-w-[800px]">
      <rect
        x={0}
        y={0}
        width={size}
        height={size}
        rx={12}
        className="fill-secondary/60"
      />

      <circle
        cx={boardX}
        cy={boardY}
        r={300}
        fill="none"
        className="stroke-primary/20"
        strokeWidth={2}
      />

      {boardNumbers.map((num, i) => {
        const angle = (i * 18 - 90) * (Math.PI / 180);
        const lr = boardR * 0.88;
        return (
          <text
            key={num}
            x={boardX + lr * Math.cos(angle)}
            y={boardY + lr * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[22px]"
          >
            {num}
          </text>
        );
      })}

      {throws.map((throwItem, i) => (
        <circle
          key={i}
          cx={throwItem.x}
          cy={throwItem.y}
          r={6}
          strokeWidth={2}
        />
      ))}
    </svg>
  );
}
