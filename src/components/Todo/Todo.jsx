import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <BsFillTrash3Fill />
        </button>
      </span>
    </li>
  );
}
