import React, { useEffect, useState } from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { Skill } from "./components/Skill";
import { Company as Company } from "./components/Company";
import { Education } from "./components/Education";

function App() {
  return (
    <div className="App">
      <div
        className="flex-container"
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ flex: 1 }}>
          <Heading
            name="Ushashree Mantri"
            dob={
              <>
                6<sup>th</sup> Sep, 1992
              </>
            }
            address="Boduppal, Hyderabad"
            email="mantriushashree@gmail.com"
            phone="+91 90143 65 835"
          />
          <LeftContent />
        </div>

        {/* <div style={{ flex: 0.3 }}>
          <RightContent />
        </div> */}
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div>
      <section>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">person</i>
            </div>
            &nbsp;
            <div>Profile</div>
          </div>
        </div>
        <div>
        Dedicated and compassionate HR and Educational Counselor with over 3 years of experience providing comprehensive support to students and employees. Expertise in career guidance, employee relations, and academic counseling. Talent acquisition, and fostering a positive organizational culture.
        </div>
      </section>

      <WorkExperience>
        <Company
          company="HIITMS Academy"
          location="Ameerpet, Hyderabad"
          from="Jun 2022"
          to="May 2023"
          role="Educational Counselor"
        >
          <Projects>
            <Project
              desc="Provide individualized career and educational counseling to students and employees, helping them set and achieve their academic and professional goals."
            />
            <Project
              desc="Developed and implemented career development programs and workshops."
            />
            <Project
              desc="Handleded student inquiries and provideded assistance regarding benefits, policies, and procedures."
            />
            <Project
              desc="Coordinated student training and development programs."
            />
            <Project
              desc="Stay updated on latest market trends and emerging career opportunities to provide relevant advice to students."
            />
            <Project
              desc="Provided guidance on college admissions processes, including application essays, standardized test preparation, and scholarship opportunities."
            />
          </Projects>
        </Company>

        <Company
          company="Arsen Management Consultants"
          location="Basheerbagh, Hyderabad"
          from="May 2019"
          to="March 2020"
          role="HR Recruiter"
        >
          <Projects>
            <Project
              desc="Coordinated recruitment activities, including job postings, scheduling interviews, and maintaining candidate records."
            />
            <Project
              desc="Supported the HR department in day-to-day operations and administrative tasks."
            />
            <Project
              desc="Conducted performance reviews and provide constructive feedback."
            />
            <Project
              desc="Conducted initial phone screenings and scheduled interviews with candidates, maintaining communication throughout the hiring process."
            />
          </Projects>
        </Company>

        <Company
          company="United Health Groups (Quess Corporation)"
          location="Hi-tech City, Hyderabad"
          from="Aug 2018"
          to="Feb 2019"
          role="Claims Associate"
        >
          <Projects>
            <Project
              desc="Processed and evaluated insurance claims for accuracy, completeness, and compliance with policy terms and conditions."
            />
            <Project
              desc="Reviewed claim documentation, including medical records, police reports, and witness statements, to determine coverage and liability."
            />
            <Project
              desc="Analyzed policy provisions and legal statutes to make fair and timely claim decisions."
            />
            <Project
              desc="Prepared claim reports and documentation for internal review and audit purposes."
            />
          </Projects>
        </Company>
      </WorkExperience>

      <section>
        <div>
          <div className="title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i class="material-icons">directions_run</i>
              </div>
              &nbsp;
              <div>Hobbies</div>
            </div>
          </div>
          <ul>
            <li>Reading articles, blogs, or social media posts about HR topics, career advice, and personal experiences.</li>
            <li>Exploring new recipes and cooking techniques to unwind and enjoy the process of creating meals.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 0 }}>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">school</i>
            </div>
            &nbsp;
            <div>Education</div>
          </div>
        </div>
        <Education
          location="Ramanthapur, Hyderabad"
          from="2016"
          to="2018"
          role={<div>Master of Business Administration (Finance)</div>}
          company="Princeton PG College of Information Technology"
        ></Education>
      </section>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <section>
      <div className="title">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <i class="material-icons">work</i>
          </div>
          &nbsp;
          <div>Work Experience</div>
        </div>
      </div>
      {props.children}
    </section>
  );
}

function Projects({ children }) {
  return (
    <React.Fragment>
      {/* <p style={{ marginBottom: 0, marginTop: "2px" }}>
        <b>Projects</b>
      </p> */}
      <ul>{children}</ul>
    </React.Fragment>
  );
}

function Project({ title, desc, content, tech }) {
  return (
    <li>
      <div>
        {/* <b>{title}:</b> */}
        {desc}
      </div>

      {/* <div>{content}</div> */}

      {/* <div
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          marginTop: "8px",
          marginBottom: "4px",
        }}
      >
        Languages and Technologies used
      </div>
      <div>{tech}</div> */}
    </li>
  );
}

function RightContent() {
  return (
    <div>
      <section>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">science</i>
            </div>
            &nbsp;
            <div>Skills</div>
          </div>
        </div>

        <div>
          <div className="subtitle"> - BACKEND TECHNOLOGIES</div>
          <Skill name="NodeJS" rating={11} />
          <Skill name="ExpressJS" rating={11} />
          <Skill name="NestJS" rating={11} />
          <Skill name="Laravel" rating={10} />
          {/* <Skill name="Java Spring" rating={10} /> */}
          <Skill name="Django" rating={9} />
        </div>

        <div>
          <div className="subtitle"> - FRONTEND TECHNOLOGIES</div>
          <Skill name="ReactJS" rating={11} />
          <Skill name="ReactNative" rating={9} />
          <Skill name="Flutter" rating={11} />
          <Skill name="Android" rating={9} />
        </div>

        <div>
          <div className="subtitle"> - DATABASE TECHNOLOGIES</div>
          <Skill name="MySQL" rating={10} />
          <Skill name="MongoDB" rating={9} />
          <Skill name="Firebase" rating={10} />
        </div>

        <div>
          <div className="subtitle"> - PROGRAMMING LANGUAGES</div>
          <Skill name="Javascript" rating={11} />
          <Skill name="Typescript" rating={11} />
          <Skill name="Python" rating={9} />
          <Skill name="PHP" rating={10} />
          <Skill name="Java" rating={10} />
          <Skill name="Dart" rating={11} />
          <Skill name="SQL" rating={10} />
          <Skill name="HTML5/CSS3" rating={11} />
        </div>

        <div>
          <div className="subtitle"> - CLOUD TECHNOLOGIES</div>
          <Skill name="AWS" rating={10} />
          <Skill name="Google Cloud" rating={9} />
          <Skill name="Digital Ocean" rating={10} />
        </div>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i class="material-icons">language</i>
              </div>
              &nbsp;
              <div>Languages</div>
            </div>
          </div>
          <Skill name="English" rating={11} />
          <Skill name="Hindi" rating={11} />
          <Skill name="Telugu" rating={11} />
        </div>
      </section>

      {/* Personal projects */}
      <section>
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <i class="material-icons">assignment</i>
            </div>
            &nbsp;
            <div>Personal Projects</div>
          </div>
        </div>
        <ul>
          <li>
            <b>Home Automation:</b>A Home Automation system by which I can
            monitor and control the Devices (Fans, Lights etc) from anywhere
            using mobile app.
            <div
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                marginTop: "8px",
                marginBottom: "4px",
              }}
            >
              Languages and Technologies used
            </div>
            <div>Java, Kotlin, Android, Python, MQTT</div>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <div className="title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <i class="material-icons">directions_run</i>
              </div>
              &nbsp;
              <div>Hobbies</div>
            </div>
          </div>
          <ul>
            <li>Developing & Contributing to opensource projects.</li>
            <li>Learning new programming languages & technologies.</li>
            <li>Developing personal projects.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
