/**
 * Button Component - Updated with Simple Variant System
 * Clean, easy to use, never breaks
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
// Note: cn utility would need to be implemented or imported from a utility library
// import { cn } from "../lib/utils"
import { variants as designSystemVariants } from "@sudobility/design"
import { createQuickVariants } from "@sudobility/design"

// Create variant resolver once
const v = createQuickVariants(designSystemVariants);

// Clean variant definitions - let the system handle the classes
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "",
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
    
    // ✨ SIMPLE: Get variant classes - never breaks!
    const variantClass = v.button(variant || 'default', size === 'default' || size === null ? undefined : size);
    
    return (
      <Comp
        className={`${buttonVariants({ size, className })} ${variantClass}`.trim()}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

// =============================================================================
// COMPARISON: Before vs After
// =============================================================================

/*
BEFORE (fragile, complex):
const getVariantClass = (variantPath: any): string => {
  if (typeof variantPath === 'function') {
    return variantPath();
  }
  if (variantPath && typeof variantPath.default === 'function') {
    return variantPath.default();
  }
  return '';
};

const variantClass = getVariantClass((variants.button as any)?.primary);

AFTER (simple, robust):
const variantClass = v.button('primary');
*/