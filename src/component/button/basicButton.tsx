import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'

import { BtnWrap } from './styles'

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentWitdh?: string
  size?: string
  themes?: BtnTheme
  children: ReactNode
}

type BtnTheme = 'green' | 'white' | 'blue'

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
