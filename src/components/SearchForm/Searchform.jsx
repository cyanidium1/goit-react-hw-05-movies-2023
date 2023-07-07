import React from 'react';
import styles from './Searchform.module.css';

const Searchform = props => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        name="search"
        className={styles.input}
        type="text"
        value={props.filmName}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchform;
