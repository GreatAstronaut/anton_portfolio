import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import DiscordIcon from "../../Icons/DiscordIcon";
import SkypeIcon from "../../Icons/SkypeIcon";

type SocialLink = {
  Icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & { className?: string }
  >;
  href: string;
  label: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    Icon: GithubIcon,
    href: "https://github.com/antondev-123/",
    label: "GitHub Profile",
  },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/anton-sydor-363a17334/",
    label: "LinkedIn Profile",
  },
  {
    Icon: DiscordIcon,
    href: "https://discord.gg/qWBuAKhX",
    label: "Discord Server",
  },
  {
    Icon: SkypeIcon,
    href: "https://join.skype.com/invite/F9cgIK5RIkuy",
    label: "Skype Invite",
  },
];

type IconClickableWithAnimationProps = {
  Icon: SocialLink["Icon"];
  href: string;
  label: string;
};

const IconClickableWithAnimation: React.FC<IconClickableWithAnimationProps> = ({
  Icon,
  href,
  label,
}) => (
  <motion.div
    whileHover={{
      y: -3,
      transition: { duration: 0.1 },
    }}
  >
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <Icon className="w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer" />
    </a>
  </motion.div>
);

type SocialMediaArroundProps = {
  finishedLoading: boolean;
};

const EMAIL = "sydoranton99@outlook.com";

const SocialMediaArround: React.FC<SocialMediaArroundProps> = ({
  finishedLoading,
}) => {
  const socialTransition = {
    y: {
      delay: finishedLoading ? 0 : 11,
      duration: finishedLoading ? 0 : 0.5,
    },
  };

  return (
    <>
      {/* Social Media Icons */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={socialTransition}
        className="z-10 fixed bottom-0 left-0 hidden lg:flex flex-row px-12 items-center justify-between"
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <IconClickableWithAnimation
                key={label}
                Icon={Icon}
                href={href}
                label={label}
              />
            ))}
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* Email Address Bar */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        transition={socialTransition}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
          >
            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Send email"
            >
              <span className="font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                {EMAIL.split("@")[0]}
                <span className="text-AAsecondary">@</span>
                {EMAIL.split("@")[1].split(".")[0]}
                <span className="text-AAsecondary">.</span>
                {EMAIL.split("@")[1].split(".")[1]}
              </span>
            </a>
          </motion.div>
          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
};

export default SocialMediaArround;
