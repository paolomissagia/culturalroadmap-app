import NavigationType from "@/models/NavigationType";
import { createContext } from "react";

const NavigationContextInitialState = {
  start: false,
  setStart: () => {},
  end: false,
  setEnd: () => {},
};

export const NavigationContext = createContext<NavigationType>(
  NavigationContextInitialState
);
