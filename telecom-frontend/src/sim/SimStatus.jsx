import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axiosConfig";

function SimStatus() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/sim/status")
      .then(res => setStatus(res.data))
      .catch(() => setStatus("Error fetching status ❌"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.blobTop} />
      <div style={styles.blobBottom} />

      <Navbar />

      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.iconWrapper}>
            <span style={styles.icon}>🔍</span>
          </div>
          <h2 style={styles.heading}>SIM Status</h2>
          <p style={styles.subheading}>Current status of your SIM card</p>

          <div style={styles.statusBox}>
            {loading ? (
              <p style={styles.loadingText}>Fetching status...</p>
            ) : (
              <>
                <p style={styles.statusLabel}>STATUS</p>
                <p style={styles.statusValue}>{status}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Segoe UI', sans-serif"
  },
  blobTop: {
    position: "absolute",
    top: "-80px",
    right: "-80px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)",
    filter: "blur(40px)"
  },
  blobBottom: {
    position: "absolute",
    bottom: "-80px",
    left: "-80px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
    filter: "blur(40px)"
  },
  content: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
    padding: "20px"
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    padding: "40px 36px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "380px",
    boxSizing: "border-box"
  },
  iconWrapper: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #7c3aed, #6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    boxShadow: "0 8px 20px rgba(124,58,237,0.4)"
  },
  icon: {
    fontSize: "26px"
  },
  heading: {
    margin: "0 0 4px 0",
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff"
  },
  subheading: {
    margin: "0 0 24px 0",
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)"
  },
  statusBox: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    minHeight: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  statusLabel: {
    fontSize: "11px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.4)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    margin: "0 0 8px 0"
  },
  statusValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#a78bfa",
    margin: "0"
  },
  loadingText: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.4)",
    margin: "0"
  }
};

export default SimStatus;