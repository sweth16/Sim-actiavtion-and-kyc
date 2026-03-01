import { useState } from "react";
import api from "../api/axiosConfig";
import Navbar from "../components/Navbar";

function ActivateSim() {
  const [simId, setSimId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleActivate = async () => {
    if (!simId.trim()) {
      alert("Please enter a SIM ID");
      return;
    }
    try {
      setLoading(true);
      await api.post(`/sim/activate/${simId}`);
      alert("SIM Activated Successfully ✅");
    } catch (error) {
      alert("Activation Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.blobTop} />
      <div style={styles.blobBottom} />

      <Navbar />

      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.iconWrapper}>
            <span style={styles.icon}>📡</span>
          </div>
          <h2 style={styles.heading}>Activate SIM</h2>
          <p style={styles.subheading}>Enter your SIM ID to activate it</p>

          <label style={styles.label}>SIM ID</label>
          <input
            type="text"
            placeholder="Enter SIM ID"
            value={simId}
            onChange={(e) => setSimId(e.target.value)}
            style={styles.input}
            onFocus={e => e.target.style.borderColor = "#7c3aed"}
            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
          />

          <button
            onClick={handleActivate}
            disabled={loading}
            style={{ ...styles.button, opacity: loading ? 0.75 : 1 }}
            onMouseEnter={e => !loading && (e.target.style.background = "linear-gradient(135deg, #6d28d9, #4f46e5)")}
            onMouseLeave={e => e.target.style.background = "linear-gradient(135deg, #7c3aed, #6366f1)"}
          >
            {loading ? "Activating..." : "Activate SIM →"}
          </button>
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
  label: {
    fontSize: "12px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.6)",
    marginBottom: "6px",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  },
  input: {
    marginBottom: "20px",
    padding: "11px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1.5px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box"
  },
  button: {
    padding: "13px",
    fontSize: "15px",
    fontWeight: "600",
    background: "linear-gradient(135deg, #7c3aed, #6366f1)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    letterSpacing: "0.03em",
    boxShadow: "0 6px 20px rgba(124,58,237,0.45)",
    transition: "opacity 0.2s, background 0.2s"
  }
};

export default ActivateSim;