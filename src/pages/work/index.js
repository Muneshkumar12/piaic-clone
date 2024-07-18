import React from "react";
import Layout from "../../layout";
import "../../styles/work.css";
import pakistanMap from "../../images/pakMap.920e8f6a.png";
import { WorkCard } from "../../components";
const HowItWork = () => {
  let roadmapData = [
    {
      Number: 1,
      Name: "Karachi",
      Status: "Accepting applications in Karachi",
    },
    {
      Number: 2,
      Name: "Islamabad",
      Status: "Accepting applications in Islamabad",
    },
    {
      Number: 3,
      Name: "Lahore",
      Status: "Accepting applications in Lahore",
    },
    {
      Number: 4,
      Name: "Peshawar",
      Status: "Accepting applications in Peshawar",
    },
  ];
  const workCradData = [
    {
      number: 2,
      para: "To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process",
      bgColor: "#E5DCDC",
      tag: "h1",
      color: "#017969"
    },
    {
      number: 3,
      para: "All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.",
      bgColor: "#33322D",
      tag: "p",
      color: "#017969"
    },
    {
      number: 4,
      para: `Those students who wish to participate in the program online can check the distance learning option in the application form.Please note that distance learning students must also take proctored exams on site, just like the onsite students. The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1, 500, before the start of each quarter.`,
      bgColor: "#0EB5A2",
      tag: "p",
      color: "#fff"
    },
    {
      number: 5,
      para: "Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.",
      bgColor: "#E5DCDC",
      tag: "p",
      color: "#33322D"
    },
    {
      number: 6,
      para: "Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.",
      bgColor: "#33322D",
      tag: "p",
      color: "#fff"
    },
    {
      number: 7,
      para: "For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.Please note we are closed on Fridays.For technical questions related to coursework, you may contact us via email at education@piaic.org.",
      bgColor: "#0EB5A2",
      tag: "p",
      color: "#fff"
    },
  ];
  return (
    <Layout footerHide={true}>
      <div className="container-fluid work-main">
        <span>How it Works</span>
        <WorkCard
          number="1"
          para="PIAIC will launch classes in the following locations, one city at a time, in the following order."
          bgColor="#33322D"
          color="#fff"
          tag="h1"
        />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 work-sec-map">
              <img src={pakistanMap} alt="pakistanmap" />
            </div>
            <div className="col-12 col-md-6 work-sec-rodmap-main">
              <div className="roadmap">
                <h2>City by City Roadmap</h2>
                {roadmapData.map((item, index) => {
                  return (
                    <div className="city-row" key={index}>
                      <div className="city-number">{item.Number}</div>
                      <div className="city-name">{item.Name}</div>
                      <div className="city-status">{item.Status}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {workCradData.map((item, index) => {
        return (
          <WorkCard
            key={index}
            number={item.number}
            para={item.para}
            bgColor={item.bgColor}
            tag={item.tag}
            color={item.color}
          />
        )
      })}
    </Layout>
  );
};

export default HowItWork;
