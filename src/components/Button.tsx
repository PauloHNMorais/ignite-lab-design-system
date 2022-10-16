import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: string | ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild = false }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 px-3 rounded font-semibold text-sm w-full transition-colors bg-cyan-500 hover:bg-cyan-300 focus:ring-2 ring-white text-black '
      )}
    >
      {children}
    </Comp>
  );
};
