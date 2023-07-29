'use client';
import { ContactData } from "./components/ContactData";
import { ContactForms } from "./components/ContactForms";
import { ContactMain } from "./components/ContactMain";

export default function Contact() {
  return (
      <>
        <ContactMain />
        <ContactData />
        <ContactForms />
      </>
  )
}