import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  kotlin,
  php,
  laravel,
  oracle,
  next,
  genga,
  daniel,
  rowda,
  maandeeq,
} from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full stack web developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Database Administrator",
      icon: backend,
    },
    {
      title: "Data analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "Java",
    //   icon: java,
    // },
    // {
    //   name: "Kotlin",
    //   icon: kotlin,
    // },
    // {
    //   name: "Php",
    //   icon: php,
    // },
    // {
    //   name: "Laravel",
    //   icon: laravel,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "E-GAP Kenya",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sept 2021 - April 2023",
      points: [
        "Developing and maintenance of the E-GAP official website using react.js and related technologies",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "Chaspot International",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "November 2021 to date",
      points: [
        "Created a GBV management application to allow reporting, tracking and solving of GBV related issues and provide needed psychosocial therapy assistance to victims and to promote justice",
        "Utilized kotlin and its rich features to implement a stunning application",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing offline features to enable access to individuals in remote areas",
      ],
    },
    {
      title: "Web developer",
      company_name: "Maandeeq Mental Institute",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Developed a single page application using the MERN stack",
        "Effectively implemented the website to manage the registration of new users to the SPI Initiative",
        "Reduced the application time by 60% by effectively automating the registration process",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Genga Self Help Group",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Designed and developed a full stack web application using laravel",
        "Created a loan and monthly contributions management system to help members to keep track of the group's day-to-day activities",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Keeping touch with users to resolve issue and actively debugging the application",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He really helped restructure our website with wonderful design and intriguing animations",
      name: "Daniel Njuguna",
      designation: "Executive Director",
      company: "E-GAP Kenya",
      image: daniel,
    },
    {
      testimonial:
        "Timmy really interacts with his clients streamlining the develoment process",
      name: "Rowda Olad",
      designation: "Founder/ Clinical Director",
      company: "Maandeeq Mental Health",
      image: rowda,
    },
    {
      testimonial:
        "After Timmy optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Juliet Ochego",
      designation: "Advocate",
      company: "Ochego & Co Law Firm",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Loan Management system",
      description:
        "Web based platform that allows users to make and manage loan applications together with their monthly contributions",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: genga,
      source_code_link: "https://github.com/timmyonduso/genga_app",
    },
    {
      name: "U-jinsia",
      description:
        "Android application that allows victims to report, track and get help for GBV related issues",
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "oracle",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/timmyonduso/Ujinsia",
    },
    {
      name: "Enrollment system",
      description:
        "SLI programme for student enrollment",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: maandeeq,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };