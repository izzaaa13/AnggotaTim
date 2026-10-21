
const anggota = [
  {
    nama: 'Afriza',
    nim: 'Masukkan NIM Afriza',
    jabatan: 'Ketua Tim',
    aktif: true,
  },
  {
    nama: 'Audy',
    nim: 'Masukkan NIM Audy',
    jabatan: 'Anggota Tim',
    aktif: true,
  },
  {
    nama: 'Angger',
    nim: 'Masukkan NIM Angger',
    jabatan: 'Anggota Tim',
    aktif: false,
  },
]

function KartuAnggota({ nama, nim, jabatan, aktif }) {
  return (
    <article className={`kartu-anggota ${aktif ? 'aktif' : 'nonaktif'}`}>
      <div className="ikon-profil">
        <span role="img" aria-label="Profil anggota">👤</span>
      </div>

      <h2>{nama}</h2>

      <div className="info-anggota">
        <p><span>🪪</span> <strong>NIM:</strong> {nim}</p>
        <p><span>💼</span> <strong>Jabatan:</strong> {jabatan}</p>
        <p>
          <span>👤</span> <strong>Status:</strong>{' '}
          {aktif ? 'Aktif' : 'Tidak Aktif'}
        </p>
      </div>

      <hr />

      <span className={`label-status ${aktif ? 'label-aktif' : 'label-nonaktif'}`}>
        {aktif ? '✓ Anggota Aktif' : '⚠ Tidak Aktif'}
      </span>
    </article>
  )
}

export default function AnggotaTim() {
  return (
    <section className="daftar-anggota">
      <header className="header-anggota">
        <span className="subjudul">KENALI TIM KAMI</span>
        <h1>Daftar Anggota Tim</h1>
        <p>Berkenalan dengan anggota tim kami.</p>
      </header>

      <div className="daftar-kartu">
        {anggota.map((orang) => (
          <KartuAnggota
            key={orang.nama}
            nama={orang.nama}
            nim={orang.nim}
            jabatan={orang.jabatan}
            aktif={orang.aktif}
          />
        ))}
      </div>
    </section>
  )
}
