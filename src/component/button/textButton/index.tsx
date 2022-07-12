import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'

import { BtnWrap } from './styles'

type BtnTheme = 'green' | 'blue' | 'black'

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentWitdh?: string
  children: ReactNode
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl'
  themes?: BtnTheme
}

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    { contentWitdh = '100%', size = 'm', themes = 'green', children, ...props },
    ref
  ) => {
    return (
      <BtnWrap
        ref={ref}
        contentWitdh={contentWitdh}
        size={size}
        themes={themes}
        {...props}
      >
        {children}
      </BtnWrap>
    )
  }
)

export default TextButton
