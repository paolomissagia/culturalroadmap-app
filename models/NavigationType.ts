import React from "react";

export default interface GuideType {
  start: boolean | null;
  end: boolean | null;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setEnd: React.Dispatch<React.SetStateAction<boolean>>;
}
