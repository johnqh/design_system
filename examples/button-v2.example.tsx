/**
 * Button component using the new variant system
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
// Note: cn utility would need to be implemented or imported from a utility library
// import { cn } from "../lib/utils"
import { useVariant, useNestedVariant } from "./variant-provider.example"

// Clean, simple variant definitions using the registry
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "", // Will be filled by variant registry
        primary: "",
        secondary: "",
        destructive: "",
        outline: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Get variant classes from registry
    const variantClass = useVariant('button', variant || 'default');
    
    // For size-specific variants, try nested path first
    const sizeSpecificClass = size && size !== 'default' 
      ? useNestedVariant(`button.${variant || 'default'}.${size}`)
      : '';
    
    // Use size-specific if available, otherwise use base variant
    const finalVariantClass = sizeSpecificClass || variantClass;
    
    return (
      <Comp
        className={`${buttonVariants({ size, className })} ${finalVariantClass}`.trim()}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }