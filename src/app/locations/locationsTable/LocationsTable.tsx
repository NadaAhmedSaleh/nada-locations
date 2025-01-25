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

export const LocationsTable = ({
  page,
  rows,
  setTotalRecords,
}: {
  page: number;
  rows: number;
  setTotalRecords: any;
}) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const { locations, total } = await fetchLocations(page, rows); // API call
        setLocations(locations);
        setTotalRecords(total);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };
    loadLocations();
  }, [page, rows, setTotalRecords]);

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
