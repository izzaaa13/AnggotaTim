export default function KartuAnggota({ nama, nim, jabatan, aktif }) {
  return (
    <article
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "25px",
        width: "260px",
        boxSizing: "border-box",
        boxShadow: "0 8px 25px rgba(30, 64, 175, 0.10)",
        borderTop: `6px solid ${aktif ? "#6366f1" : "#f87171"}`,
        textAlign: "center",
        transition: "transform 0.2s",
      }}
    >
      <div
        style={{
          width: "85px",
          height: "85px",
          borderRadius: "50%",
          background: aktif ? "#e0e7ff" : "#fee2e2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "38px",
          margin: "0 auto 15px",
        }}
      >
        👤
      </div>

      <h2
        style={{
          color: "#1e293b",
          margin: "10px 0 20px",
          fontSize: "24px",
        }}
      >
        {nama}
      </h2>

      <div style={{ textAlign: "left", color: "#64748b", lineHeight: "2" }}>
        <p>🪪 NIM: {nim}</p>
        <p>💼 Jabatan: {jabatan}</p>
        <p>👥 Status: {aktif ? "Aktif" : "Tidak Aktif"}</p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e2e8f0" }} />

      <span
        style={{
          display: "inline-block",
          padding: "8px 20px",
          borderRadius: "30px",
          background: aktif ? "#dcfce7" : "#fee2e2",
          color: aktif ? "#15803d" : "#dc2626",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        ● {aktif ? "Anggota Aktif" : "Tidak Aktif"}
      </span>
    </article>
  );
}