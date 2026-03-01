import { useState } from "react";
import api from "../api/axiosConfig";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
    role: "USER"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.username.trim()) { alert("Username is required"); return false; }
    if (!formData.password.trim()) { alert("Password is required"); return false; }
    if (!formData.phone.trim()) { alert("Phone number is required"); return false; }
    if (formData.phone.length < 10) { alert("Phone number must be 10 digits"); return false; }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setLoading(true);
      const response = await api.post("/auth/register", formData);
      if (response.status === 200) {
        alert("Registration Successful ✅");
        window.location.href = "/";
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data || "Registration Failed ❌");
      } else {
        alert("Server not reachable ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.blobTop} />
      <div style={styles.blobBottom} />

      <form style={styles.form} onSubmit={handleRegister}>
        <div style={styles.iconWrapper}>
          <span style={styles.icon}>👤</span>
        </div>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subheading}>Join us today, it's free!</p>

        <label style={styles.label}>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
          onFocus={e => e.target.style.borderColor = "#7c3aed"}
          onBlur={e => e.target.style.borderColor = "#e2e8f0"}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          onFocus={e => e.target.style.borderColor = "#7c3aed"}
          onBlur={e => e.target.style.borderColor = "#e2e8f0"}
        />

        <label style={styles.label}>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          onFocus={e => e.target.style.borderColor = "#7c3aed"}
          onBlur={e => e.target.style.borderColor = "#e2e8f0"}
        />

        <label style={styles.label}>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button
          type="submit"
          style={{ ...styles.button, opacity: loading ? 0.75 : 1 }}
          disabled={loading}
          onMouseEnter={e => !loading && (e.target.style.background = "linear-gradient(135deg, #6d28d9, #4f46e5)")}
          onMouseLeave={e => e.target.style.background = "linear-gradient(135deg, #7c3aed, #6366f1)"}
        >
          {loading ? "Registering..." : "Register →"}
        </button>

        <p style={styles.loginText}>
          Already have an account? <a href="/" style={styles.loginLink}>Sign in</a>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  form: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "40px 36px",
    borderRadius: "20px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    width: "340px",
    position: "relative",
    zIndex: 1
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
    marginBottom: "16px",
    padding: "11px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1.5px solid #e2e8f0",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box"
  },
  button: {
    marginTop: "6px",
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
  },
  loginText: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "13px",
    color: "rgba(255,255,255,0.45)"
  },
  loginLink: {
    color: "#a78bfa",
    textDecoration: "none",
    fontWeight: "600"
  }
};

export default Register;