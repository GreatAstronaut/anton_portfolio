import React from "react";

interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {
  href?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  "aria-label"?: string;
}

/**
 * ExternalLink Icon Component
 * - Renders an external link SVG icon.
 * - If `href` is provided, renders as a link.
 * - If `onClick` is provided, handles click event.
 * - Accepts all standard SVG props.
 */
const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  onClick,
  "aria-label": ariaLabel = "External Link",
  ...svgProps
}) => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
        transition ease-in-out delay-50 hover:-translate-y-1 
        hover:scale-110 duration-200"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={onClick}
      {...svgProps}
    >
      <title>{ariaLabel}</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    );
  }

  return icon;
};

export default ExternalLink;
