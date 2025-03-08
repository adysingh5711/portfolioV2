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
import c from "/public/C.png";
import solidity from "/public/Solidity.svg";
import expressjs from "/public/expressjs.svg";
import pinecone from "/public/pinecone.svg";

import { StaticImageData } from 'next/image';

export const skillsImage = (skill: string | undefined): StaticImageData | undefined => {
  const skillID = skill?.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "aws":
      return aws;
    case "figma":
      return figma;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "javascript":
      return javascript;
    case "markdown":
      return markdown;
    case "materialui":
      return materialui;
    case "mongodb":
      return mongoDB;
    case "php":
      return php;
    case "mysql":
      return mysql;
    case "nextjs":
      return nextJS;
    case "openai":
      return openai;
    case "react":
      return react;
    case "tailwind":
      return tailwind;
    case "typescript":
      return typescript;
    case "vitejs":
      return vitejs;
    case "reactnative":
      return reactnative;
    case "python":
      return python;
    case "c":
      return c;
    case "solidity":
      return solidity;
    case "expressjs":
      return expressjs;
    case "pinecone":
      return pinecone;
    default:
      return undefined;
  }
};
