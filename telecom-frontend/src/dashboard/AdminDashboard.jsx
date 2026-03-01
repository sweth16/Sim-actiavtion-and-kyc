import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.blobTop} />
      <div style={styles.blobBottom} />

      <Navbar />

      <div style={styles.content}>
        <div style={styles.card}>
          <div style={styles.iconWrapper}>
            <span style={styles.icon}>🛠️</span>
          </div>
          <h2 style={styles.title}>Admin Dashboard</h2>
          <p style={styles.subtitle}>Manage SIM activations and KYC verifications</p>

          <div style={styles.buttonGroup}>
            <Link to="/activate-sim" style={styles.link}>
              <button
                style={{ ...styles.button, ...styles.btnBlue }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                📶 Activate SIM
              </button>
            </Link>

            <Link to="/verify-kyc" style={styles.link}>
              <button
                style={{ ...styles.button, ...styles.btnGreen }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                ✅ Verify KYC
              </button>
            </Link>

            <Link to="/sim-status" style={styles.link}>
              <button
                style={{ ...styles.button, ...styles.btnPurple }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                🔍 Check SIM Status
              </button>
            </Link>
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
    padding: "50px 60px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
    textAlign: "center",
    width: "100%",
    maxWidth: "420px",
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
    margin: "0 auto 16px auto",
    boxShadow: "0 8px 20px rgba(124,58,237,0.4)"
  },
  icon: {
    fontSize: "26px"
  },
  title: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
    letterSpacing: "0.5px"
  },
  subtitle: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "14px",
    marginBottom: "40px"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  link: {
    textDecoration: "none"
  },
  button: {
    width: "100%",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    letterSpacing: "0.4px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    color: "#ffffff"
  },
  btnBlue: {
    background: "linear-gradient(135deg, #2193b0, #6dd5fa)",
    boxShadow: "0 4px 15px rgba(33,147,176,0.4)"
  },
  btnGreen: {
    background: "linear-gradient(135deg, #11998e, #38ef7d)",
    boxShadow: "0 4px 15px rgba(17,153,142,0.4)"
  },
  btnPurple: {
    background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    boxShadow: "0 4px 15px rgba(142,45,226,0.4)"
  }
};

export default AdminDashboard;