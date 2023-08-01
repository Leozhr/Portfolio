'use client';
import { useWidthPage } from "@/functions/WidthPage";
import { styled } from "styled-components";
import { ContactData } from "./components/ContactData";
import { ContactForms } from "./components/ContactForms";
import { ContactMain } from "./components/ContactMain";

const ContactStyle = styled.div`
  @media (min-width: 1027px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 95vh;
  }
`

export default function Contact() {
  const widthPage = useWidthPage();

  return (
      <ContactStyle>
        <ContactMain />
        {widthPage <= 1027 && <ContactData />}
        <ContactForms />
      </ContactStyle>
  )
}