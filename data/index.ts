export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience", show: true },
  { name: "Projects", link: "#projects", show: true },
  { name: "Skills", link: "#skills", show: true },
  // { name: "Education", link: "#education", show: true },
  // { name: "Blogs", link: "#blogs", show: false },
  // { name: "Clients", link: "#testimonials", show: true },
  // { name: "Testimonials", link: "#testimonials", show: false },
  { name: "Contact", link: "#contact", show: false },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NeuraFind.ai",
    des: "AI-powered product selection that helps users search and receive recommendations based on their needs",
    img: "/neurafindai.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tailwind.svg",
      "openai.svg",
      "/git.svg",
    ],
    hoverText: "NeuraFind.ai",
    link: "https://neurafind-ai.vercel.app/",
    codeLink: "https://github.com/adysingh5711/neurafind.ai_Frontend",
  },
  {
    id: 2,
    title: "Lichess Review",
    des: "A production-ready, full-stack Lichess analysis tool with real-time data processing and performance review",
    img: "/lyir.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tailwind.svg",
      "/git.svg",
    ],
    hoverText: "Lichess Review",
    link: "https://lichess-review.vercel.app/",
    codeLink: "https://github.com/adysingh5711/LichessYearInReview"
  },
    {
    id: 3,
    title: "Portfolio",
    des: "Created a modern Portfolio website with smooth animations and cleaner UI.",
    img: "/PortfolioV2.png",
        iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tailwind.svg",
      "/git.svg",
    ],
    hoverText: "Portfolio",
    link: "https://0xaditya.xyz/",
    codeLink: "https://github.com/adysingh5711/portfolioV2"
  },
  {
    id: 4,
    title: "BrainIQ",
    des: "BrainIQ is an innovative platform offering seamless, accessible learning and quality education for all",
    img: "/BrainIQ.png",
    iconLists: [
      "/vitejs.svg",
      "/materialui.svg",
      "/javascript.svg",
      "/mongoDB.svg",
      "/git.svg",
    ],
    hoverText: "BrainIQ",
    link: "https://adysingh5711.github.io/BrainIQ/",
    codeLink: "https://github.com/adysingh5711/BrainIQ"
  },
  {
    id: 5,
    title: "Emotion Inference",
    des: "Created a website to monitor the realtime data from the Street Lights and implemented the security system.",
    img: "/EmotionInference.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg","/git.svg"],
    hoverText: "Emotion Inference",
    link: "https://adysingh5711.github.io/Smart-Lightings-Trinetra/index.html",
    codeLink: "https://github.com/adysingh5711/Smart-Lightings-Trinetra"
  },

];

export const testimonials = [
  {
    quote:
      "Prasanna one of curious guy that I worked with. Interest to learn and keeps challenging you with his ideas, suggestions, that not only helps him but as a mentor you are also in a check. He has been the anchor guy of the team and always delivered his work with great quality. Keep Doing the good work. Be Curious keep scaling.",
    name: "Debaprasad Sahoo",
    title: "Specialist Master | Frontend Architect at iiitiansnetwork Digital",
    url: "/deba.jpeg",
  },
  {
    quote:
      "Prasanna has always gone above and beyond his work, and it was a pleasure working with him. Even if there were some challenging issues, he was excited to probe deeper and find a solution to it. I also admired the fact that he always clarified even the smallest of doubts, which showcased his communication and accountability. He is a very straightforward person, with a strong focus on quality work, ready to accept constructive feedback, and owns up to any mistakes and makes up for it in a short time. He is very amiable and pleasant, making it a joy to work with him. Prasanna is a valuable asset to any team, and I would strongly vouch to have him on my team again.",
    name: "Sharon Philip",
    title:
      "Product Manager | MBA '24 at Imperial Business School | ex-iiitiansnetwork Digital | NITC",
    url: "/sharon.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
];

export const education = [
  {
    id: 1,
    title: "IIIT Ranchi",
    desc: "Electronics and Communication Engineering (B.Tech)",
    className: "md:col-span-2",
    thumbnail: "/IIIT_Ranchi.png",
    grade: "8.17 / 10",
  },
  {
    id: 2,
    title: "Frankfurt School of Finance & Management",
    desc: "Bitcoin Cohort",
    className: "md:col-span-2",
    thumbnail: "/FrankfurtSchoolOfFinanceManagement.jpeg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Tech Team Member",
    desc: `<ul class="list-disc list-inside space-y-2">
      <li>Working collaboratively within a team to develop and maintain the webbsite of the organisation</li>
      <li>Designed and implemented a customized Next.js project structure with an integrated Tailwind setup, resulting in a 30% reduction in development time and a measurable improvement in code quality</li>
      <li>Engineered responsive templates and components, prioritizing SEO and accessibility contributing to a significant increase in client's online revenue</li>`,
    className: "md:col-span-2",
    duration: "August 2023 - present",
    companyName: "IIITians Network",
    logo: "iiitiansnetwork",
  },
  {
    id: 2,
    title: "Contributor",
    desc: `<ul class="list-disc list-inside space-y-2">
      <li>Engineered a robust component-based architecture using ReactJS for a web app tailored to the banking sector</li>
      <li>Implemented the atomic design pattern, orchestrating the construction of a style guide to craft the application's user interface</li>
      <li>Demonstrated proficiency in seamlessly integrating RESTful services furnished by the backend team</li>
      <li>Engaged actively in code reviews, testing procedures, bug rectification, and scrum activities</li>
      <li>Contributed in open source repositories</li>`,
    className: "md:col-span-2",
    duration: "October 2023 - November 2023",
    companyName: "Hacktoberfest 10",
    logo: "hacktoberfest",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/singhaditya5711/",
  },
  {
    id: 2,
    img: "/git.svg",
    url: "https://github.com/adysingh5711",
  },
  {
    id: 3,
    img: "/x.svg",
    url: "https://x.com/singhaditya5711/",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Polyfills for .forEach() , .map(), .reduce() methods in JavaScript",
    description:
      "Explained the polyfill. Implemented the polyfills of the for-loop methods in javascript",
    duration: "3 min read",
    thumbnail: "/js-blog.png",
    url: "https://jslearn.hashnode.dev/polyfills-for-foreach-map-reduce-methods-in-javascript",
  },
  {
    id: 2,
    title: "What's new in React 19 Beta",
    description: "Changes introduced in React 19 Beta",
    duration: "2 min read",
    thumbnail: "/react-blog.webp",
    url: "https://medium.com/@gsprasanna/whats-new-in-react-19-beta-b7392481550e",
  },
];
