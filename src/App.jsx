import KartuAnggota from "./components/AnggotaTim";
// menampilkan halaman utama aplikasi anggota tim
export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e293b",
          marginBottom: "35px",
        }}
      >
        Daftar Anggota Tim 
      </h1>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {/* Pemanggilan pertama */}
        <KartuAnggota
          nama="afriza"
          nim="2483207001"
          jabatan="Ketua Tim"
          aktif={true}
        />

        {/* Pemanggilan kedua */}
        <KartuAnggota
          nama="Audy"
          nim="2483207002"
          jabatan="Anggota"
          aktif={true}
        />

        {/* Pemanggilan ketiga */}
        <KartuAnggota
          nama="Angger"
          nim="2483207003"
          jabatan="Anggota"
          aktif={false}
        />
      </section>
    </main>
  );
}