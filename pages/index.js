import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h1>Pong Frame</h1>
      <p>Select a game to play</p>
      <div style={{ margin: 24 }}>
        {/* If you have the original Pong game, add the link here */}
        {/* <Link href="/pong"><button style={{ margin: 8, padding: '12px 24px', fontSize: 18 }}>Play Pong</button></Link> */}
        <Link href="/spot-the-difference">
          <button style={{ margin: 8, padding: '12px 24px', fontSize: 18 }}>
            Play Spot the Difference
          </button>
        </Link>
      </div>
      <footer style={{ marginTop: 40, color: '#888' }}>
        &copy; {new Date().getFullYear()} Pong Frame Mini Games
      </footer>
    </div>
  );
}
