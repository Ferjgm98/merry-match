import * as React from 'react';
import { InputComponentProps } from './input.types';
import { twMerge } from 'tailwind-merge';

type InputComponent = React.ForwardRefExoticComponent<
  InputComponentProps & React.RefAttributes<HTMLInputElement>
>;

const Input: InputComponent = React.forwardRef<
  HTMLInputElement,
  InputComponentProps
>(
  (
    {
      name,
      onChange,
      onBlur,
      label,
      error,
      wrapperClass,
      labelClass,
      className,
      prefix,
      suffix,
      id,
      ...rest
    },
    ref,
  ): JSX.Element => {
    return (
      <label
        htmlFor={name}
        id={id}
        className={twMerge(['block my-2 w-full', wrapperClass])}
      >
        {!!label?.length && <p className={twMerge(labelClass)}>{label}</p>}
        <div className="relative rounded-md shadow-sm">
          {!!prefix?.length && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">{prefix}</span>
            </div>
          )}
          <input
            className={twMerge([
              'bg-background border-input px-4 py-3 rounded-md w-full block',
              !!prefix?.length ? 'pl-7' : '',
              !!suffix?.length ? 'pr-7' : '',
              className,
              !!error?.length ? 'border border-destructive' : '',
            ])}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            id={id}
            {...rest}
          />
          {!!suffix?.length && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <span className="text-gray-500 sm:text-sm">{suffix}</span>
            </div>
          )}
        </div>
        {!!error?.length && (
          <span className="text-destructive text-xs font-bold">{error}</span>
        )}
      </label>
    );
  },
);

Input.displayName = 'Input';

export default Input;
