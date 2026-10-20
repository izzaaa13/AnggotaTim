import TaskItem from './TaskItem';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) return <p>Belum ada tugas.</p>;
  return (
    <ul>
      {tasks.map((t, key) => (
        <TaskItem key={key + 1} tugas={t} />
      ))}
    </ul>
  );
}