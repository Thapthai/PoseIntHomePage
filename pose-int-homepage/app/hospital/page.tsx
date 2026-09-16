"use client";

import HomeScrollRestore from "../components/HomeScrollRestore";
import StatsBar from "../components/StatsBar";
import {
  HospitalAbout,
  HospitalAwards,
  HospitalContact,
  HospitalHero,
  HospitalProjects,
} from "./components";

export default function HospitalPage() {
  return (
    <main>
      <HomeScrollRestore />
      <HospitalHero />
      <StatsBar />
      <HospitalAbout />
      <HospitalAwards />
      <HospitalProjects />
      <HospitalContact />
    </main>
  );
}
