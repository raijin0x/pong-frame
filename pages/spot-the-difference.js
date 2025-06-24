import { useState } from "react";

// Define the difference points (x, y, r) according to diff.svg
const differences = [
  { x: 200, y: 120, r: 30 }, // yellow circle
  { x: 320, y: 200, r: 25 }, // purple rectangle
];

export default function SpotTheDifference() {
  const [found, setFound] = useState(Array(differences.length).fill(false));
  const [score, setScore] = useState(0);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    let updated = [...found];
    let newScore = score;
    differences.forEach((diff, idx) => {
      if (
        !found[idx] &&
        Math.sqrt((clickX - diff.x) ** 2 + (clickY - diff.y) ** 2) < diff.r
      ) {
        updated[idx] = true;
        newScore += 1;
      }
    });
    setFound(updated);
    setScore(newScore);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Spot the Difference</h2>
      <p>Click on the spots that are different in the image below!</p>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src="/images/diff.svg"
          alt="Spot the Difference"
          width={400}
          height={250}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
        {/* Draw circles on found spots */}
        {differences.map(
          (diff, idx) =>
            found[idx] && (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  left: diff.x - diff.r,
                  top: diff.y - diff.r,
                  width: diff.r * 2,
                  height: diff.r * 2,
                  border: "2px solid red",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
            )
        )}
      </div>
      <div style={{ marginTop: 16 }}>
        <b>Score: {score} / {differences.length}</b>
        {score === differences.length && <p>Congratulations! You found them all 🎉</p>}
      </div>
    </div>
  );
}
