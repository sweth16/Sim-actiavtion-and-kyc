import { Link } from "react-router-dom";

function CustomerDashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.blobTop} />
      <div style={styles.blobBottom} />

      <div style={styles.content}>
        <div style={styles.iconWrapper}>
          <span style={styles.icon}>🏠</span>
        </div>
        <h1 style={styles.heading}>Customer Dashboard</h1>
        <p style={styles.subheading}>What would you like to do today?</p>

        <div style={styles.cardContainer}>
          <Link
            to="/request-sim"
            style={styles.card}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <span style={styles.cardIcon}>📱</span>
            <span style={styles.cardText}>Request SIM</span>
          </Link>

          <Link
            to="/sim-status"
            style={styles.card}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <span style={styles.cardIcon}>🔍</span>
            <span style={styles.cardText}>Check SIM Status</span>
          </Link>

          <Link
            to="/upload-kyc"
            style={styles.card}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <span style={styles.cardIcon}>📄</span>
            <span style={styles.cardText}>Upload KYC</span>
          </Link>
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
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    boxSizing: "border-box"
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
    textAlign: "center",
    width: "100%",
    maxWidth: "800px"
  },
  iconWrapper: {
    width: "64px",
    height: "64px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #7c3aed, #6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto",
    boxShadow: "0 8px 20px rgba(124,58,237,0.4)"
  },
  icon: {
    fontSize: "30px"
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0 0 8px 0"
  },
  subheading: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.5)",
    margin: "0 0 48px 0"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "30px 20px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    width: "180px",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "pointer"
  },
  cardIcon: {
    fontSize: "36px"
  },
  cardText: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.85)"
  }
};

export default CustomerDashboard;