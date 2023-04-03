import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';
import Flex from '@components/Flex';

import style from './PageHeading.module.scss';

type PageHeadingProps = {
  title: string;
  mainIcon?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  showBackButton?: boolean;
};

const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  mainIcon,
  children,
  className,
  showBackButton,
  style: userStyle,
}) => {
  const history = useHistory();

  return (
    <Flex
      className={`${style.pageHeading} ${className}`}
      style={userStyle}
      alignItems='center'
      justifyContent='space-between'
    >
      <h1 className={style.heading}>
        {showBackButton && (
          <IonIcon
            onClick={() => history.goBack()}
            className={style.headingBackIcon}
            icon={arrowBack}
          />
        )}
        {title}
        {mainIcon && (
          <IonIcon className={style.headingMainIcon} icon={mainIcon} />
        )}
      </h1>
      {children}
    </Flex>
  );
};

export default PageHeading;
