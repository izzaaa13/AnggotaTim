import { useState } from 'react';
import TaskList from './components/TaskList';
import Button from './button';

//membuat data tugas
const dummy = [
  { id: 1, judul: 'Baca Materi', selesai: true },
  { id: 2, judul: 'Kerjakan latihan', selesai: false },
  { id: 3, judul: 'Kumpulkan Jurnal', selesai: false }
];

export default function App() {
  const [message, setMessage] = useState('');

  function handleButtonClick(label) {
    setMessage(`${label} ditekan.`);
  }

  return (
    <main style={{ padding: '20px', display: 'grid', gap: '12px' }}>
      <h1>TaskMate</h1>
      <TaskList tasks={dummy} />

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
        <Button variant="success" onClick={() => handleButtonClick('Tombol Sukses')}>
          Tombol Sukses
        </Button>
        <Button variant="warning" onClick={() => handleButtonClick('Tombol Warning')}>
          Tombol Warning
        </Button>
        <Button variant="primary" onClick={() => handleButtonClick('Tombol Utama')}>
          Tombol Utama
        </Button>
        <Button variant="danger" onClick={() => handleButtonClick('Tombol Gagal')}>
          Tombol Gagal
        </Button>
      </div>
      {message && <p role="status">{message}</p>}
    </main>
  );
}