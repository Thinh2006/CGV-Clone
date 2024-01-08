import { UseFormRegister } from "react-hook-form"

type Options = {
    value: string,
    content: string | number
}

type selectProps = {
    className?: string,
    options: Options[],
    id?: string,
    label?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>,
    error?: string
}

export const Select = ({className, options, id, label, register, error}:selectProps) => {
  return (
    <div>
        <label htmlFor={id} className="font-bold">
            {label}
            <span className="text-[var(--primary-color)]">*</span>
        </label>
        <select className={className} id={id} {...register?.(id)}>
            {options.map((option)=>
                <option value={option.value}>{option.content}</option>
            )}
        </select>
        {!!error && <p className="text-red-500 text-14">{error}</p>}
    </div>
  )
}
