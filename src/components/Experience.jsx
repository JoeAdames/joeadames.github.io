import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section className="py-16 px-8 max-w-5xl mx-auto">
      <div className="flex flex-col gap-y-2">
        <ExperienceCard
          company={"Storis, Inc."}
          title={"Senior Front End Developer"}
          date={"Aug 2021- Nov 2024"}
          description={
            "Mobile POS, Inventory Control, Warehouse Management, Merchanidising in the furniture retail industry"
          }
        />
        <ExperienceCard
          company={"WeatherWorks, Inc."}
          title={"Front End Engineer"}
          date={"Mar 2020 - Mar 2021"}
          description={
            "providing timely, accurate and dependable meteorological services to clients in both the private and public sector"
          }
        />
        <ExperienceCard
          company={"The Wall Street Transcript"}
          title={"Front End Developer/Audio Technician"}
          date={"Jul 2019 - Feb 2020"}
          description={
            "40 years of leading publication for direct from the source exclusive financial interviews"
          }
        />
        <ExperienceCard
          company={"Selective Insurance"}
          title={"Data & Applications Analyst Intern"}
          date={"Dec 2017- Feb 2019"}
          description={
            "            Personalized Insurance Experience with an online account and mobile app"
          }
        />
      </div>
    </section>
  );
}
