import React from 'react';

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'unsafe';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'unsafe';
};

const Flex: React.FC<FlexProps> = ({
  children,
  style,
  className,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        ...props,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Flex.defaultProps = {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: 'row',
  flexWrap: 'nowrap',
  order: 1,
  className: '',
  style: {},
};

export default Flex;
