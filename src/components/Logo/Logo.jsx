import React, { useState, useEffect } from 'react';

import { ReactComponent as IconLogoMobail } from '../../pictures/svg/LogoMobail.svg';
import { ReactComponent as IconLogoTablet } from '../../pictures/svg/LogoPCTablet.svg';
import { LogoTxt, LogoBox } from './LogoStyles';

const Logo = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LogoBox>
      {isSmallViewport ? <IconLogoMobail /> : <IconLogoTablet />}
      <LogoTxt>VocabBuilder</LogoTxt>
    </LogoBox>
  );
};

export default Logo;
