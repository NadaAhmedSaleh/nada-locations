"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import styles from "./LocationsTable.module.scss"; // Custom styles
import "./CustomTable.scss";
import { fetchLocations } from "@/app/server/apis/locations";

const siteNameTemplate = (rowData: any) => (
  <span className={styles.siteName}>{rowData.name}</span>
);

const LocationsTable = ({ page, rows }: { page: number; rows: number }) => {
  const [locations, setLocations] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchLocations(page, rows);
        setLocations(data.locations);
        setTotalRecords(data.total);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };
    loadLocations();
  }, [page, rows]);

  return (
    <div className={styles.locationsTableContainer}>
      <DataTable value={locations}>
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
