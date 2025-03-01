import hacktoberfest from "/public/Hacktoberfest.jpeg";
import iiitiansnetwork from "/public/IIITiansNetwork.jpg";

export const companyImage = (companyName) => {
  const companyID = companyName?.toLowerCase();
  switch (companyID) {
    case "iiitiansnetwork":
      return iiitiansnetwork;
    case "hacktoberfest":
      return hacktoberfest;
    default:
      break;
  }
};
