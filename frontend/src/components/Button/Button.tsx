import {
  type ReactNode,
  type PropsWithChildren,
  type ButtonHTMLAttributes,
} from 'react';

type ButtonSize = 'small' | 'medium' | 'large' | 'extra-large';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link';

type ButtonProps = {
  size?: ButtonSize;
  iconOnly?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
};

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
>;

export function Button({
  className = '',
  children,
  iconOnly,
  size = 'small',
  variant = 'primary',
  leftIcon,
  rightIcon,
  ...props
}: Props) {
  const textStyles: Record<ButtonSize, string> = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
    'extra-large': 'text-lg',
  };

  const buttonStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-action-primary-base hover:bg-action-primary-hover active:bg-action-primary-active disabled:bg-action-primary-disabled text-light-primary disabled:text-light-disabled',
    secondary:
      'bg-action-secondary-base2 hover:bg-action-secondary-hover active:bg-action-secondary-active disabled:bg-action-secondary-disabled text-dark-primary disabled:text-dark-disabled',
    outline:
      'bg-action-secondary-base2 hover:bg-action-secondary-hover active:bg-action-secondary-active disabled:bg-action-secondary-disabled border border-solid border-action-outline-base text-dark-primary disabled:text-dark-disabled',
    ghost:
      'bg-white hover:bg-action-secondary-hover text-dark-primary disabled:text-dark-disabled',
    destructive:
      'border-action-destructive-base border border-solid hover:border-action-destructive-hover hover:bg-red-10 disabled:border-red-10 text-action-destructive-base hover:text-action-destructive-hover disabled:text-action-destructive-disabled',
    link: 'text-action-primary-base hover:text-action-primary-hover disabled:text-dark-disabled underline',
  };

  return (
    <button
      className={`inline-flex py-3 px-4.5 justify-center items-center gap-2 rounded-sm hover:cursor-pointer disabled:cursor-not-allowed ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {leftIcon ? leftIcon : null}
      {iconOnly ? null : (
        <span className={`font-medium leading-normal ${textStyles[size]}`}>
          {children}
        </span>
      )}
      {rightIcon ? rightIcon : null}
    </button>
  );
}
