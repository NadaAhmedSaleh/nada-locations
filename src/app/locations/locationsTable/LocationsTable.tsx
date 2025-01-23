import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import styles from "./LocationsTable.module.scss"; // Custom styles
import "./CustomTable.scss";

const generateRandomData = (numRecords: number) => {
  const randomNames = ["Kulmbach", "Test 1", "Berlin", "Munich", "Hamburg"];
  const randomAddresses = [
    "Spiegel 15, 95326, Kulmbach",
    "N/A, 00000, N/A",
    "LUDWIG BASF ECC",
    "Alexanderplatz, Berlin",
    "Hauptstraße, Hamburg",
  ];
  const randomCountries = ["DE", "KZ", "US", "FR", "ES"];
  const randomSiteTypes = ["own", "shared", "leased"];

  return Array.from({ length: numRecords }, (_, index) => ({
    id: index + 1,
    priorityScore: (Math.random() * 100).toFixed(1),
    name: randomNames[Math.floor(Math.random() * randomNames.length)],
    stateId: Math.ceil(Math.random() * 10),
    address:
      randomAddresses[Math.floor(Math.random() * randomAddresses.length)],
    country:
      randomCountries[Math.floor(Math.random() * randomCountries.length)],
    siteType:
      randomSiteTypes[Math.floor(Math.random() * randomSiteTypes.length)],
  }));
};
const siteNameTemplate = (rowData: any) => (
  <span className={styles.siteName}>{rowData.name}</span>
);

const LocationsTable = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const data = generateRandomData(15);
    setProducts(data);
  }, []);

  return (
    <div className={styles.locationsTableContainer}>
      <DataTable value={products}>
        <Column field="priorityScore" header="Priority Score" />
        <Column field="name" header="Site Name" body={siteNameTemplate} />
        <Column field="stateId" header="State ID" />
        <Column field="address" header="Address" />
        <Column field="country" header="Country" />
        <Column field="siteType" header="Site Type" />
      </DataTable>
    </div>
  );
};

export default LocationsTable;
