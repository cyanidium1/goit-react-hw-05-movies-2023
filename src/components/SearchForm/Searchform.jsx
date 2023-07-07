import React from 'react';
import styles from './Searchform.module.css';

const Searchform = props => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={props.filmName}
        onChange={props.handleInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchform;
