import styles from '../../styles/Header.module.css';
import { useEffect, useState } from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { useDispatch, useSelector } from 'react-redux';
import { changeView, selectIsMobile } from '../../slices/webStateSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(selectIsMobile);

  useEffect(() => {
    console.log(isMobile);
    const updateWindowDimensions = () => {
      if (window.innerWidth <= 700) dispatch(changeView(true));
      if (window.innerWidth > 700) dispatch(changeView(false));
    };

    window.addEventListener('load', updateWindowDimensions);
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('load', updateWindowDimensions);
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [isMobile]);

  return (
    <nav className={styles.headerContainer}>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </nav>
  );
};

export default Header;
