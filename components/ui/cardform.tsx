import * as React from "react"

import { cn } from "@/lib/utils"

const CardForm = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        style={{ backgroundColor: 'white' }}
        className={cn(
            "rounded-lg shadow-sm bg-white",
            className
        )}
        {...props}
    />
))
CardForm.displayName = "CardForm"

const CardFormHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col pt-2 pb-2 bg-white", className)}
        {...props}
    />
))
CardFormHeader.displayName = "CardFormHeader"

const CardFormTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold bg-white leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
CardFormTitle.displayName = "CardFormTitle"

const CardFormDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground bg-white", className)}
        {...props}
    />
))
CardFormDescription.displayName = "CardFormDescription"

const CardFormContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardFormContent.displayName = "CardFormContent"

const CardFormFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center bg-white p-6 pt-0", className)}
        {...props}
    />
))
CardFormFooter.displayName = "CardFormFooter"

export { CardForm, CardFormHeader, CardFormFooter, CardFormTitle, CardFormDescription, CardFormContent }
