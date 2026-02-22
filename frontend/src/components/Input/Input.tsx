import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type InputProps = {
  label?: string;
  caption?: string;
  subtitle?: string;
  prefixContent?: ReactNode;
  suffixContent?: ReactNode;
};

type Props = PropsWithChildren<
  InputHTMLAttributes<HTMLInputElement> & InputProps
>;

export function Input({
  id = '',
  label = '',
  caption = '',
  subtitle = '',
  prefixContent,
  suffixContent,
  className = '',
  ...inputProps
}: Props) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {label ? (
        <label htmlFor={id} className="text-dark-primary text-sm font-normal">
          {label}
        </label>
      ) : null}

      {subtitle ? (
        <span className="text-dark-informative text-sm font-normal">
          {subtitle}
        </span>
      ) : null}

      <div
        className="flex py-2.5 px-3 items-center gap-3 self-stretch rounded-sm border
       border-solid border-interaction-outline-base bg-white hover:border-interaction-outline-hover
        focus-within:border-interaction-primary-active disabled:border-interaction-outline-disabled
         disabled:bg-interaction-secondary-disabled text-dark-primary text-sm font-normal disabled:text-dark-disabled"
      >
        {prefixContent ? prefixContent : null}

        <input
          id={id}
          className={`flex outline-0 border-0 h-full w-full placeholder:text-dark-tertiary ${className}`}
          {...inputProps}
        />

        {suffixContent ? suffixContent : null}
      </div>

      {caption ? (
        <span className="text-dark-tertiary text-xs font-normal">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
