import { Button } from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core'

interface Props {
  className?: string
  onClick: () => void
  children: React.ReactNode
}

export function OutlinedButton(props: Props) {
  const { className = '', onClick, children, ...rest } = props
  const { colorScheme } = useMantineColorScheme()
  const buttonColor = colorScheme === 'dark' ? '#ececec' : '#212121'

  return (
    <Button
      variant="outline"
      className={`w-20 ${className}`}
      style={{ borderColor: buttonColor, color: buttonColor }}
      onClick={onClick}
      type="button"
      {...rest}
    >
      {children}
    </Button>
  )
}
