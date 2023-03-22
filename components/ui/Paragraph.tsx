import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";
import React from "react";

export const paragraphVariants = cva("max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center", {
  variants: {
    size: {
      default: "text-base sm:text-lg",
      sm: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({className, size, children, ...props}, ref) => {
    return (
      <p {...props} ref={ref} className={cn(paragraphVariants({size, className}))}>
        {children}
      </p>
    );
  },
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
