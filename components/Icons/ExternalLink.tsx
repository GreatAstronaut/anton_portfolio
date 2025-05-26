import React from "react";
import { useRouter } from "next/router";

interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {
  url: string;
  title?: string;
  "aria-label"?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  title = "External Link",
  "aria-label": ariaLabel,
  className = "",
  ...svgProps
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    router.push(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent<SVGSVGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(url);
    }
  };

  return (
    <svg
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel || title}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
        transition ease-in-out delay-50 hover:-translate-y-1 
        hover:scale-110 duration-200 ${className}`}
      {...svgProps}
    >
      <title>{title}</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export default ExternalLink;
