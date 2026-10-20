export default function Button({ tugas }) {
  return (
    <li style={{ textDecoration: tugas.selesai ? 'line-through' : 'none' }}>
      <button type="Sukses  " checked={tugas.selesai} readOnly />
      <button type="Warning" checked={tugas.selesai} readOnly />
      <button type="Utama" checked={tugas.selesai} readOnly />
      <button type="Gagal" checked={tugas.selesai} readOnly />
      <span>{tugas.judul}</span>
      
    </li>
    
  );
}

