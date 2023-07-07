import React from "react";
import "./PageOne.css";
import PageCrd from "../PageCard/PageCrd";

const PageOne = () => {
  const heading = "das alles und noch viel mehr";
  const headingunderpara =
    "its uber unsere App moglich. Ubereugen Sie selbst und melden sich gleich an. Nutzen Sie die oben beschriebenen Funktionen und moch mehr:";
  // -------------- list items
  const listItems = [
    {
      id: 1,
      value: "Information (Notrufnummern, Ansprechpartner etc.)",
    },
    {
      id: 2,
      value: "Online-Formulare",
    },
    {
      id: 3,
      value: "Chatten unter Nachbran",
    },
    {
      id: 4,
      value: "Sharing-Portal",
    },
    {
      id: 5,
      value: "Terminkalender",
    },
    {
      id: 6,
      value: "Neuigkeiten aus der Umgebung (RSS-Feed)",
    },
    {
      id: 7,
      value: "Timeline - aktuelle Geschehnisse auf einen Blick",
    },
    {
      id: 8,
      value: "Information zu OPNV",
    },
    {
      id: 9,
      value: "Beanstandungsmanagement",
    },
    {
      id: 10,
      value: "Dokumenteverwaltung (Mietvertrag, Nebenkostenabrechnung etc.)",
    },
    {
      id: 11,
      value: "Lebensmittel-Lieferung",
    },
    {
      id: 12,
      value: "Essensbestellungen",
    },
    {
      id: 13,
      value: "Wasche-Service",
    },
    {
      id: 14,
      value: "Car-Sharing",
    },
    {
      id: 14,
      value: "Smart Parking",
    },
  ];
  return (
    <div className="pageOne">
      <PageCrd />
    </div>
  );
};

export default PageOne;
