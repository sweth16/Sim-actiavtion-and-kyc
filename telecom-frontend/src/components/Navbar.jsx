import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h3 style={styles.logo}>🌐 Telecom System</h3>

      <div style={styles.navLinks}>
        {role === "ADMIN" && (
          <>
            <button style={styles.navBtn} onClick={() => navigate("/admin")}>Admin Dashboard</button>
            <button style={styles.navBtn} onClick={() => navigate("/activate-sim")}>Activate SIM</button>
            <button style={styles.navBtn} onClick={() => navigate("/verify-kyc")}>Verify KYC</button>
          </>
        )}

        {role === "USER" && (
          <>
            <button style={styles.navBtn} onClick={() => navigate("/customer")}>Customer Dashboard</button>
            <button style={styles.navBtn} onClick={() => navigate("/request-sim")}>Request SIM</button>
            <button style={styles.navBtn} onClick={() => navigate("/sim-status")}>SIM Status</button>
          </>
        )}

        <button onClick={logout} style={styles.logoutBtn}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 28px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
    boxSizing: "border-box"
  },
  logo: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    margin: 0,
    letterSpacing: "0.5px",
    fontFamily: "'Segoe UI', sans-serif"
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  navBtn: {
    padding: "7px 14px",
    fontSize: "13px",
    fontWeight: "500",
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "background 0.2s"
  },
  logoutBtn: {
    padding: "7px 14px",
    fontSize: "13px",
    fontWeight: "600",
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 4px 12px rgba(239,68,68,0.35)"
  }
};

export default Navbar;