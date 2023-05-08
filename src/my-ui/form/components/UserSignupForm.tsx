"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { IUserSignUpFormFields } from "@/state/types"
import { useFormHook } from "../useFormHook"
import { TheFormInputs } from "./FormInputs"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const inputs = [
        { id: "name", type: "text", placeholder: "name", label: "Name" },
        { id: "username", type: "text", placeholder: "username", label: "Username" },
        { id: "email", type: "email", placeholder: "email", label: "Email" },
        { id: "github_username", type: "text", placeholder: "github_username", label: "Github Username", optional: true },
        { id: "password", type: "password", placeholder: "password", label: "Password" },
        { id: "confirmPassword", type: "password", placeholder: "confirmPassword", label: "Confirm Password" },
    ]

    const {
        error,handleChange,input,setError,setInput
    } = useFormHook<IUserSignUpFormFields>({
        initialValues:{
            confirmPassword:"",
            email:'',
             name:"",
             password:"",
             username:"",
             github_username:""

        }
    })
    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 3000)
    }


    return (
        <div className={cn("flex flex-col gap-5", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col  gap-2">
                    <TheFormInputs<IUserSignUpFormFields> handleChange={handleChange} inputs={inputs} values={input}/>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign Up with Email
                    </Button>
                </div>
            </form>

            <div className="relative">
                <div className="m-5 p-5 h-5"></div>
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
                <div className="m-5 p-5 h-5"></div>
            </div>

            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    )
}
