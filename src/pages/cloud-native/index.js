import React from "react";
import Layout from "../../layout";
import exclamationGif from "../../images/IL.348ffc91.gif";
import {
    PageHeader,
    DropPagesCard,
    TimeLine,
    StatisticsImg,
    dataScienceImg,
    kerasImg,
    linuxImg,
    dockerImg,
    microImg,
    cloudNativeImg,
    javascriptImg,
    nodeJsImg
  } from "../../components";
const CloudNative = () => {
    const cardData1 = [
        {
          title: "Quarter 1",
          para: "Cloud Native Computing Foundations",
          bgColor: "#FFFFFF",
          color: "#E20A70",
        },
        {
          title: "Quarter 2",
          para: "Developing Cloud Native Microservices",
          bgColor: "#EF7FB3",
          color: "#fff",
        },
        {
          title: "Quarter 3",
          para: "Kubernetes in Practice",
          bgColor: "#E8408E",
          color: "#fff",
        },
        {
          title: "Quarter 4",
          para: "AWS Application Development",
          bgColor: "#E1006A",
          color: "#fff",
        },
      ];
      const cardData2 = [
        {
          img: exclamationGif,
          bgColor: "#fff",
          link: "link not added for cloud native",
        },
        {
          title: "Quarter 1",
          para: "Innovation Methodologies",
          bgColor: "#fff",
          color: "#000000",
          link: "link not added for cloud native",
        },
        {
          title: "Quarter 2",
          para: "Infrastructure As Code and DevOps",
          bgColor: "#424242",
          color: "#fff",
          link: "link not added for cloud native",
        },
        {
          title: "Quarter 3",
          para: "Lean UI/UX and Bot Design",
          bgColor: "#000000",
          color: "#fff",
          link: "link not added for cloud native",
        },
      ];
      const timeLineData = [
        {
          timeLineHeading: "Introduction to Cloud Native Computing",
          timeLineImage: cloudNativeImg,
          timeLineDes:
            "Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization. In the last 15 years, cloud application delivery has moved from being bound to physical servers to running on virtual machines with a full operating system and now to containers with Docker, where developers can specify every aspect of deployment.",
          CircleNo: "1A",
          bgColor: "#FFF",
          className: false,
          color:"#192a56",
          border:true
        },
        {
          timeLineHeading:
            "Introduction to Linux and Bash using Python",
          timeLineImage: linuxImg,
          timeLineDes:
            "Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started.",
          CircleNo: "1B",
          bgColor: "#fff",
          className: true,
          color:"#192a56",
          border:true
        },
        {
          timeLineHeading: "Docker Deep Dive",
          timeLineImage: dockerImg,
          timeLineDes:
            "This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.",
          CircleNo: "1C",
          bgColor: "#FFF",
          className: false,
          color:"#192a56",
          border:true
        },
        {
          timeLineHeading: "JavaScript/TypeScript Programming",
          timeLineImage: javascriptImg,
          timeLineDes:
            "JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js. Assuming no prior programming experience on the part of the student, this module starts by focusing on the fundamentals of composing code with JavaScript. Introduction to only server based JavaScript/TypeScript is covered i.e. Node.js. Students will also learn about the syntax and structure of the language including operators and expressions, control structures, methods, and arrays using Node.",
          CircleNo: "2A",
          bgColor: "#fff",
          className: true,
          color:"#192a56",
          border:true
        },
        {
            timeLineHeading: "Developing Microservices using Node.js and Express",
            timeLineImage: nodeJsImg,
            timeLineDes:
              "This module includes how to build microservices using Node.js. It starts by introducing Node’s powerful traits and shows students how they map to the features of microservices using JavaScript. Students will explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will see how easy it is to create a RESTful web service using Node.js, TypeScript and the Express micro-framework. Students will also learn gRPC and GraphQL based microservices. By the end of the module, students will be able to use JavaScript/Typescript to build a Node microservice and know how to test it, hook it up to a database, and automate the development process.",
            CircleNo: "2A",
            bgColor: "#EF7EB3",
            className: false,
            color:"#fff",
            border:false
          },
        {
            timeLineHeading: "Version Control with Git",
            timeLineImage: StatisticsImg,
            timeLineDes:
              "You won’t find a top programmer, cloud developer, or AI engineer who doesn’t use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.",
            CircleNo: "2B",
            bgColor: "#EF7EB3",
            className: true,
            color:"#fff",
            border:false
          },
          {
            timeLineHeading: "Cloud Automation using Ansible",
            timeLineImage: dataScienceImg,
            timeLineDes:
              "Ansible is an open-source IT automation engine which can remove drudgery from work life and will also dramatically improve the scalability, consistency, and reliability of your IT environment. In this module, students will start to explore how to automate repetitive cloud administration tasks using Ansible.",
            CircleNo: "2C",
            bgColor: "#EF7EB3",
            className: false,
            color:"#fff",
            border:false
          },
          {
            timeLineHeading: "Kubernetes in Practice",
            timeLineImage: kerasImg,
            timeLineDes:
              "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam.",
            CircleNo: "3A",
            bgColor: "#E83F8F",
            className: true,
            color:"#fff",
            border:false
          },
          {
            timeLineHeading: "Cloud Automation using Ansible",
            timeLineImage: microImg,
            timeLineDes:
              "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices.",
            CircleNo: "4A",
            bgColor: "#E83F8F",
            className: false,
            color:"#fff",
            border:false
          },
      ];
  return (
    <Layout footerHide={true}>
      <PageHeader
        bgColor="#E1006A"
        heading="Cloud Native and Mobile Web Computing Specialist"
        para="A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING."
      />
       <DropPagesCard
        cardData={cardData1}
        cardHeading="Technical Track"
        mainHeading={true}
        cardDes="A four-quarter cloud computing program."
        color="#E1006A"
      />
        <DropPagesCard
        cardData={cardData2}
        cardHeading="Compulsory Innovation Track"
        mainHeading={false}
      />
      <TimeLine
        timeLine={timeLineData}
        mainHeading="Detailed Program Structure"
        color="#E1006A"
        borderColor="#E1006A"
      />
    </Layout>
  );
};

export default CloudNative;
