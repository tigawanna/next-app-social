import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { HTMLInputTypeAttribute } from "react";

export interface IFormInputs {
    id: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    label: string;
    optional?: boolean;
}

interface FormInputsProps <T>{
inputs: IFormInputs[],
values: T,
handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function TheFormInputs<T>({inputs,handleChange,values}: FormInputsProps<T>) {
    if (inputs.length < 1) return null

    return (
        <div>
            {
                inputs.map((inpt) => {
                    return (
                        <div className="flex flex-col gap-5">
                            <Label className="" htmlFor={inpt.id}>
                                {inpt.label}
                            </Label>
                            <Input
                                id={inpt.id}
                                // @ts-ignore
                                value={values[inpt.id]}
                                required={!inpt.optional}
                                placeholder={inpt.placeholder}
                                type={inpt.type}
                                autoCapitalize="none"
                                autoCorrect="off"
                                onChange={handleChange}

                            />
                        </div>)
                })


            }
        </div>)
}
