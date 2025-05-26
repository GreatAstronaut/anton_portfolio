
import "../styles/globals.css";
import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState, useMemo, ReactNode } from "react";
import type { AppProps } from "next/app";

// Types for shared state
export type SharedState = {
  portfolio: {
    NavBar: {
      IntervalEvent: number | null;
      scrolling: boolean | null;
      scrollSizeY: number | null;
    };
    Scrolling: {
      IntervalEvent: number | null;
    };
  };
  userdata: {
    timerCookieRef: React.MutableRefObject<number | null>;
    windowSizeTracker: React.MutableRefObject<{ width: number; height: number } | null>;
    mousePositionTracker: React.MutableRefObject<{ x: number; y: number } | null>;
  };
  typing: {
    keyboardEvent: KeyboardEvent | null;
    eventInputLostFocus: FocusEvent | null;
  };
  finishedLoading: boolean;
};

export type AppContextValue = {
  sharedState: SharedState;
  setSharedState: React.Dispatch<React.SetStateAction<SharedState>>;
};

function MyApp({ Component, pageProps }: AppProps) {
  // Refs for userdata
  const timerCookieRef = useRef<number | null>(null);
  const windowSizeTrackerRef = useRef<{ width: number; height: number } | null>(null);
  const mousePositionRef = useRef<{ x: number; y: number } | null>(null);

  // Memoize initial state to avoid recreation on each render
  const initialState = useMemo<SharedState>(() => ({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  }), [timerCookieRef, windowSizeTrackerRef, mousePositionRef]);

  const [sharedState, setSharedState] = useState<SharedState>(initialState);

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
