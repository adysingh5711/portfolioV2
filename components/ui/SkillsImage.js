import aws from "/public/aws.svg";
import css from "/public/css.svg";
import docker from "/public/docker.svg";
import figma from "/public/figma.svg";
import firebase from "/public/firebase.svg";
import git from "/public/git_logo.svg";
import html from "/public/html.svg";
import javascript from "/public/javascript.svg";
import markdown from "/public/markdown.svg";
import materialui from "/public/materialui.svg";
import mongoDB from "/public/mongoDB.svg";
import php from "/public/php.svg";
import mysql from "/public/mysql.svg";
import nextJS from "/public/next.svg";
import openai from "/public/openai.svg";
import react from "/public/react.svg";
import tailwind from "/public/tailwind.svg";
import typescript from "/public/typescript.svg";
import vitejs from "/public/vitejs.svg";
import reactnative from "/public/reactnative.svg";
import python from "/public/python.svg";
import c from "/public/c.png";
import solidity from "/public/solidity.svg";
import expressjs from "/public/expressjs.svg";

export const skillsImage = (skill) => {
  const skillID = skill?.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "python":
      return python;
    case "c":
      return c;
    case "solidity":
      return solidity;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "expressjs":
      return expressjs;
    case "native":
      return reactnative;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "php":
      return php;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "aws":
      return aws;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "openai":
      return openai;
    case "figma":
      return figma;
    case "markdown":
      return markdown;
    default:
      break;
  }
};
