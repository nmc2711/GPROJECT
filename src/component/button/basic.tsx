import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const BasicButton = forwardRef<HTMLButtonElement, BasicButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

export default BasicButton
