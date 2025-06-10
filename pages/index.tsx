import { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

import AppContext from "../components/AppContextFolder/AppContext";
import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import Education from "../components/Home/Education/Education";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";

// --- Types ---
interface MetaTags {
  title: string;
  description: string;
  image: string;
  icon: string;
  type: string;
  url: string;
  twitter: string;
}

// You should replace this with your actual AppContext type
interface AppContextType {
  sharedState: {
    finishedLoading: boolean;
    userdata: {
      timerCookieRef: { current: NodeJS.Timeout | null };
      windowSizeTracker: { current: (...args: any[]) => void };
      mousePositionTracker: { current: (...args: any[]) => void };
    };
    typing: {
      eventInputLostFocus: (...args: any[]) => void;
      keyboardEvent: (...args: any[]) => void;
    };
  };
  setSharedState: (state: any) => void;
}

const META: MetaTags = {
  title: "Anton Sydor - Web Developer",
  description: `I've been working on Web development for 10 years straight. Get in touch with me to know more.`,
  image: "/myPortfolio.png",
  icon: "/favicon.ico",
  type: "website",
  url: "https://anton-sydor.netlify.app",
  twitter: "@titofabdo",
};

const Home: React.FC = () => {
  const [showElement, setShowElement] = useState<boolean>(false);
  const [showThisCantBeReached, setShowThisCantBeReached] =
    useState<boolean>(true);
  const [showMe, setShowMe] = useState<boolean>(false);

  // Use context with type assertion or fallback
  const context = useContext(AppContext) as AppContextType | null;
  const homeRef = useRef<HTMLDivElement>(null);

  // Loading animation and cleanup logic
  useEffect(() => {
    if (!context) return;

    // Cleanup listeners and timers from context
    if (context.sharedState.userdata.timerCookieRef.current) {
      clearInterval(context.sharedState.userdata.timerCookieRef.current);
    }

    if (typeof window !== "undefined") {
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }

    const timers: NodeJS.Timeout[] = [];

    timers.push(
      setTimeout(() => setShowElement(true), 4500),
      setTimeout(() => setShowThisCantBeReached(false), 5400),
      setTimeout(() => {
        setShowElement(false);
        setShowMe(true);
        context.sharedState.finishedLoading = true;
        context.setSharedState({ ...context.sharedState });
      }, 10400)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [context]);

  // Initialize AOS
  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);

  const isProd = process.env.NODE_ENV === "production";
  const finishedLoading = context?.sharedState.finishedLoading ?? false;

  return (
    <>
      <Head>
        <title>{META.title}</title>
        <link rel="icon" href={META.icon} sizes="any" />
        <meta name="google-site-verification" content="SS-MVz5t7nqbFAoxVszZMN032dkpu1pxbWdsMifV-m4" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={META.description} />
        <meta property="og:url" content={META.url} />
        <link rel="canonical" href={META.url} />
        <meta property="og:type" content={META.type} />
        <meta property="og:site_name" content="Anton Sydor" />
        <meta property="og:description" content={META.description} />
        <meta property="og:title" content={META.title} />
        <meta property="og:image" content={META.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META.twitter} />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.image} />
      </Head>
      <div className="relative flex flex-col items-center snap-mandatory min-h-screen bg-AAprimary w-full">
        {!finishedLoading && showThisCantBeReached && <ThisCantBeReached />}
        {!finishedLoading && showElement && <Startup />}

        <Header finishedLoading={finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={finishedLoading} />
        <SocialMediaArround finishedLoading={finishedLoading} />

        {finishedLoading && (
          <>
            <AboutMe />
            <WhereIHaveWorked />
            <Education />
            <SomethingIveBuilt />
            <GetInTouch />
            <Footer
              githubUrl="https://github.com/antondev-123/anton-sydor-portfolio"
              hideSocialsInDesktop={true}
            />
          </>
        )}

        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
};

export default Home;
