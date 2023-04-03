import React from 'react';
import { IonChip, IonIcon } from '@ionic/react';

import Flex from '@components/Flex';

import style from './PageSection.module.scss';

type PageSectionProps = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  hasMore?: boolean;
  icon?: string;
  onShowMoreClick?: () => void;
};

const PageSection: React.FC<PageSectionProps> = ({
  title,
  subTitle,
  children,
  hasMore,
  icon,
  onShowMoreClick,
}) => {
  return (
    <section className={style.pageSection}>
      <Flex
        className={style.pageSectionHeading}
        alignItems='center'
        justifyContent='space-between'
      >
        <span>
          <Flex alignItems='center'>
            <h3>{title}</h3>
            <IonIcon className={style.pageSectionIcon} icon={icon} />
          </Flex>
          <p className={style.pageSectionSubTitle}>{subTitle}</p>
        </span>
        {hasMore && (
          <button
            className={style.pageSectionShowMoreButton}
            onClick={onShowMoreClick}
          >
            <IonChip color='primary'>ShowMore</IonChip>
          </button>
        )}
      </Flex>
      <Flex className={style.pageSectionContent}>{children}</Flex>
    </section>
  );
};

export default PageSection;
