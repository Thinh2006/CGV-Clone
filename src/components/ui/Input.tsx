import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

type inputProps = {
    label?: string;
    id?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    name?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
    error?: string;
    value?: string;
    hidden?: string;
};

export const Input = ({
    label,
    id,
    placeholder,
    type,
    className,
    name,
    register,
    error,
    value,
}: inputProps) => {
    return (
        <div>
            {label ? (
                <label htmlFor={id} className="font-bold">
                    {label}
                    <span className="text-[var(--primary-color)]">*</span>
                </label>
            ) : null}
            <input
                type={type}
                placeholder={placeholder}
                className={className}
                id={id}
                value={value}
                {...register?.(name)}
            />
            {!!error && <p className="text-red-500 text-14">{error}</p>}
        </div>
    );
};
