import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'

import { BtnWrap } from './styles'

type BtnTheme = 'green' | 'white' | 'blue'

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentWitdh?: string
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl'
  themes?: BtnTheme
  children: ReactNode
}

const BasicButton = forwardRef<HTMLButtonElement, BasicButtonProps>(
  (
    {
      contentWitdh = '100%',
      themes = 'green',
      size = 'xl',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <BtnWrap
        ref={ref}
        contentWitdh={contentWitdh}
        themes={themes}
        size={size}
        {...props}
      >
        {children}
      </BtnWrap>
    )
  }
)

export default BasicButton
