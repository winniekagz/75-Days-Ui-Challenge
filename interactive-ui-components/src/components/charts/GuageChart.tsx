
import GaugeComponent from "react-gauge-component";

interface GaugeProps {
  value: number;
  min?: number;
  max?: number;
  size?: number;
}

const BMILegend = () => {
  const legendItems = [
    { label: "Underweight", range: "Below 18.5", color: "#4A90E2" },
    { label: "Healthy", range: "18.5 - 24.9", color: "#5BE12C" },
    { label: "Overweight", range: "25 - 29.9", color: "#F5A623" },
    { label: "Obese", range: "30 - 39.9", color: "#EA4228" },
    { label: "Severely Obese", range: "40 and above", color: "#D0021B" },
  ];

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h4 style={{ marginBottom: "10px" }}>BMI Categories</h4>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
        {legendItems.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "5px",
            }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: item.color,
                borderRadius: "50%",
              }}
            />
            <span style={{ fontSize: "14px", color: "#333", fontWeight: "bold" }}>
              {item.label} ({item.range})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GaugeWithKey({ value, min = 10, max = 50, size = 250 }: GaugeProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        <GaugeComponent
          type="radial"
          arc={{
            width: 0.3,
            padding: 0.02,
            cornerRadius: 1,
            colorArray: ["#4A90E2", "#5BE12C", "#F5A623", "#EA4228", "#D0021B"],
            subArcs: [
              { limit: 18.5, color: "#4A90E2" },
              { limit: 24.9, color: "#5BE12C" },
              { limit: 29.9, color: "#F5A623" },
              { limit: 39.9, color: "#EA4228" },
              { limit: max, color: "#D0021B" },
            ],
          }}
          pointer={{
            type: "needle",
            color: "#000000",
            baseColor: "#333333",
            animationDelay: 0,
            elastic: true,
          }}
          value={value}
          minValue={min}
          maxValue={max}
          labels={{
            tickLabels: {
              type: "outer",
              hideMinMax: true,
              ticks: [
                { value: 18.5},
                { value: 24.9},
                { value: 29.9},
                { value: 39.9},
                { value: max },
              ],
              style: {
                fontSize: "12px",
                fill: "#333",
                fontWeight: "bold",
                textShadow: "none",
              },
            },
            valueLabel: {
              matchColorWithArc: true,
              formatTextValue: (v: any) => `${v.toFixed(1)} BMI`,
              style: {
                fontSize: "20px",
                fill: "#000",
                fontWeight: "bold",
              },
              maxDecimalDigits: 1,
            },
          }}
        />
      </div>
      <BMILegend />
    </div>
  );
}
