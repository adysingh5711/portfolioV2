import hacktoberfest from "/public/Hacktoberfest.jpeg";
import iiitiansnetwork from "/public/IIITiansNetwork.jpg";
import developer from "/public/developer.svg";

import { StaticImageData } from "next/image";

export const companyImage = (
  companyName: string | undefined
): StaticImageData | undefined => {
  const companyID = companyName?.toLowerCase();
  switch (companyID) {
    case "iiitiansnetwork":
      return iiitiansnetwork;
    case "hacktoberfest":
      return hacktoberfest;
    case "developer":
      return developer;
    default:
      return undefined;
  }
};
