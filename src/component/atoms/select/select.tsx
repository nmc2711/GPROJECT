import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';

import { Select } from './styled';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  contentWidth?: string;
  children: ReactNode;
}

const SelectComponent = forwardRef<HTMLSelectElement, Props>(({
  contentWidth = '100%',
  style,
  children,
  ...props
}, ref) => {
  return (
    <Select
      {...props}
      ref={ref}
      contentWidth={contentWidth}
      style={style}
    >
      {children}
    </Select>
  );
});

export default SelectComponent;
