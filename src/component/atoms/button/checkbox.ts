import { InputHTMLAttributes } from 'react';
import { Checkbox } from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  iconSize?: string;
}

function CheckboxComponent({
  iconSize = '24px',
  ...props
}: Props) {
  return (
    <Checkbox
      {...props}
      type="checkbox"
      iconSize={iconSize}
    />
  );
}

export default CheckboxComponent;