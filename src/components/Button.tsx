import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  asChild?: boolean;
}

export const Button = ({
  children,
  asChild = false,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 rounded font-semibold text-sm w-full transition-colors bg-cyan-500 hover:bg-cyan-300 focus:ring-2 ring-white text-black',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
