import { InputHTMLAttributes } from 'react';
import { ConfigProvider, Select, } from "antd";
import PhoneInput from "react-phone-input-2";


interface IPhoneInputProps {
    onChange?: (value: string) => void;
    value?: string;
    title?: string;
    inputStyle?: Record<string, any>;
    dataCy?: string
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    title: string;
}

interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    title: string;
    options: Array<Record<string, any>>;
    className?: string
}
export const PhoneNumberInput = ({ onChange, value, title, inputStyle, dataCy }: IPhoneInputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full ">
            {
                title && (<span className='font-medium  text-[14px] leading-[22px] '>{title}</span>)
            }
            <PhoneInput

                onlyCountries={["ng"]} // Provide an array of country codes for the allowed countries
                country={"ng"}
                value={value}
                onChange={onChange}
                enableSearch
                inputStyle={{
                    ...inputStyle,
                    height: "40px",
                    border: "1px solid #c7c7c7",
                    borderRadius: "4px",
                    outline: "none",
                }}
            />
        </div>
    )
}

export const InputField = ({ title, className, ...props }: IInputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {
                title && (<span className='font-medium text-[14px] leading-[22px]'>{title}</span>)
            }
            <input
                className={`border-[1px] border-[#919191] h-[40px] py-1 px-2 rounded-md placeholder:text-sm outline-none ${className}`}
                {...props}
            />
        </div>
    )
}

export const SelectField = ({ title, className, options, ...props }: ISelectProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {
                title && (<span className='font-medium text-[14px] leading-[22px] '>{title}</span>)
            }
            <select className={`border-[1px] border-[#919191] h-[40px] bg-transparent py-1 px-2 rounded-md placeholder:text-sm outline-none ${className}`} {...props}>
                {
                    options.map((item: Record<string, any>, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))
                }
            </select>

        </div>
    )
}

