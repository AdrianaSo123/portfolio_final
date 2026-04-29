type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  external?: boolean;
};

const variantClassName: Record<ActionLinkProps["variant"], string> = {
  primary: "action-primary",
  secondary: "action-secondary",
};

export function ActionLink({ href, children, variant, external }: ActionLinkProps) {
  const className = variantClassName[variant];

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
