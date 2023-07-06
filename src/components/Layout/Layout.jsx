import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import styled from 'styled-components';
const StyledNav = styled(NavLink)`
  &.active {
    background-color: orange;
  }
`;

const Layout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <StyledNav className={styles.item} to="/">
          Home page
        </StyledNav>
        <StyledNav className={styles.item} to="/movies">
          Movies
        </StyledNav>
        <StyledNav className={styles.item} to="/search">
          Search
        </StyledNav>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;