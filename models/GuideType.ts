import React from "react";

export default interface GuideType {
  category: string | null;
  level: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
}
