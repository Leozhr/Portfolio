'use client';
import { Skills } from "../components/Skills";
import { ProfileAbout } from "./layouts/ProfileAbout";
import { ProfileExperience } from "./layouts/ProfileExperience";
import { ProfileMain } from "./layouts/ProfileMain";
import { ProfileSkills } from "./layouts/ProfileSkills";

export default function Profile(){
  return (
    <>
      <ProfileMain />
      <ProfileAbout />
      <ProfileSkills />
      <ProfileExperience />
      <Skills />
    </>
  )
}