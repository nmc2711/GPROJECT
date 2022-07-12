import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { BtnWrap } from './styles'

interface BorderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentWitdh?: string
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl'
  borderColor?: string
  children: ReactNode
}

const BorderButton = forwardRef<HTMLButtonElement, BorderButtonProps>(
  (
    {
      contentWitdh = '100%',
      size = 'm',
      borderColor = 'green',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <BtnWrap
        ref={ref}
        size={size}
        contentWitdh={contentWitdh}
        borderColor={borderColor}
        {...props}
      >
        {children}
      </BtnWrap>
    )
  }
)
export default BorderButton
