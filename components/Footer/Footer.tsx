
import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import SkypeIcon from "../Icons/SkypeIcon";

type IconComponentProps = {
  className: string;
};

type ClickableIconProps = {
  href: string;
  Icon: React.ComponentType<IconComponentProps>;
};

const ClickableIcon: React.FC<ClickableIconProps> = ({ href, Icon }) => {
  return (
    <a href={href} className="" target="_blank" rel="noreferrer">
      <Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};

type IconData = {
  href: string;
  Icon: React.ComponentType<IconComponentProps>;
};

const IconsData: IconData[] = [
  { href: "https://github.com/antondev-123", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/anton-sydor-363a17334/",
    Icon: LinkedinIcon,
  },
  // { href: "https://t.me/LioDev0308", Icon: TelegramIcon },
  { href: "https://join.skype.com/invite/F9cgIK5RIkuy", Icon: SkypeIcon },
  { href: "https://discord.gg/qWBuAKhX", Icon: DiscordIcon },
];

type FooterProps = {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
};

const Footer: React.FC<FooterProps> = ({ githubUrl, hideSocialsInDesktop }) => {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div
        className={`flex flex-row space-x-8 ${
          hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => (
          <ClickableIcon
            key={index}
            href={iconData.href}
            Icon={iconData.Icon}
          />
        ))}
      </div>
      <a href={githubUrl} className="" target="_blank" rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Anton Sydor
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon
              className={
                "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"
              }
            />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default Footer;
