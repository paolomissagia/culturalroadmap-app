import UserInput from "@/models/GuideType";
import { createContext } from "react";

const GuideContextInitialState = {
  category: "",
  setCategory: () => {},
  level: "",
  setLevel: () => {},
};

export const GuideContext = createContext<UserInput>(GuideContextInitialState);
