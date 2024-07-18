import React from "react";
import Layout from "../../layout";
import {
  PageHeader,
  DropPagesCard,
  TimeLine,
  gitImg,
  pythonImg,
  StatisticsImg,
  anacodaImg,
  dataScienceImg,
  kerasImg,
} from "../../components";
import exclamationGif from "../../images/IL.348ffc91.gif";
const Ai = () => {
  const cardData1 = [
    {
      title: "Quarter 1",
      para: "AI Foundations",
      bgColor: "#FFFFFF",
      color: "#192A56",
    },
    {
      title: "Quarter 2",
      para: "Introduction to Data Science & Deep Learning",
      bgColor: "#8C94AA",
      color: "#fff",
    },
    {
      title: "Quarter 3",
      para: "Deploying AI Solutions",
      bgColor: "#535F80",
      color: "#fff",
    },
    {
      title: "Quarter 4",
      para: "AI In Practice",
      bgColor: "#192A56",
      color: "#fff",
    },
  ];
  const cardData2 = [
    {
      img: exclamationGif,
      bgColor: "#fff",
      link: "link not added for AI!",
    },
    {
      title: "Quarter 1",
      para: "Innovation Methodologies",
      bgColor: "#fff",
      color: "#000000",
      link: "link not added for AI!",
    },
    {
      title: "Quarter 2",
      para: "Infrastructure As Code and DevOps",
      bgColor: "#424242",
      color: "#fff",
      link: "link not added for AI!",
    },
    {
      title: "Quarter 3",
      para: "Lean UI/UX and Bot Design",
      bgColor: "#000000",
      color: "#fff",
      link: "link not added for AI!",
    },
  ];
  const timeLineData = [
    {
      timeLineHeading: "Version Control with Git",
      timeLineImage: gitImg,
      timeLineDes:
        "You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.",
      CircleNo: "1A",
      bgColor: "#FFF",
      className: false,
      color:"#192a56",
      border:true
    },
    {
      timeLineHeading:
        "Object Oriented and Functional Programming using Python",
      timeLineImage: pythonImg,
      timeLineDes:
        "In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time.",
      CircleNo: "1B",
      bgColor: "#fff",
      className: true,
      color:"#192a56",
      border:true
    },
    {
      timeLineHeading: "Introduction to Linear Algebra and Statistics",
      timeLineImage: StatisticsImg,
      timeLineDes:
        "In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow.",
      CircleNo: "1C",
      bgColor: "#FFF",
      className: false,
      color:"#192a56",
      border:true
    },
    {
      timeLineHeading: "Advanced Python Libraries with Anaconda",
      timeLineImage: anacodaImg,
      timeLineDes:
        "In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc.",
      CircleNo: "2A",
      bgColor: "#8B94AA",
      className: true,
      color:"#fff",
      border:false
    },
    {
        timeLineHeading: "Data Science Essentials",
        timeLineImage: dataScienceImg,
        timeLineDes:
          "In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.",
        CircleNo: "2B",
        bgColor: "#8B94AA",
        className: false,
        color:"#192a56",
        border:false
      },
    {
        timeLineHeading: "The Fundamentals of Deep Learning with Keras with TensorFlow Backend",
        timeLineImage: kerasImg,
        timeLineDes:
          "Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice.",
        CircleNo: "2C",
        bgColor: "#8B94AA",
        className: true,
        color:"#192a56",
        border:false
      },
  ];
  return (
    <Layout footerHide={true}>
      <PageHeader
        bgColor="#192A56"
        heading="Artificial Intelligence"
        para="A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI."
      />
      <DropPagesCard
        cardData={cardData1}
        cardHeading="Technical Track"
        mainHeading={true}
        cardDes="A four-quarter AI program in Data Science, Machine Learning, and Deep Learning."
        color="#192A56"
      />
      <DropPagesCard
        cardData={cardData2}
        cardHeading="Compulsory Innovation Track"
        mainHeading={false}
      />
      <TimeLine
        timeLine={timeLineData}
        mainHeading="Detailed Program Structure"
        color="#192A56"
        borderColor="#192A56"
      />
    </Layout>
  );
};

export default Ai;
