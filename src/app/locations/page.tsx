"use client";
import { useEffect, useState } from "react";
import PageLayout from "../components/pageLayout/PageLayout";
import { Paginator } from "primereact/paginator";
import LocationsTable from "./locationsTable/LocationsTable";

export default function Locations() {
  const [page, setPage] = useState(1);

  const handlePageChange = (e: any) => {
    setPage(e.first); // Update the page state with the new `first` value
    console.log("Current page:", e.first / e.rows + 1); // Calculate and log the 1-based page index
  };

  return (
    <PageLayout
      pageName="All Locations"
      headerRightComponent={
        <Paginator
          first={page}
          rows={10}
          totalRecords={50}
          onPageChange={handlePageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          currentPageReportTemplate="{currentPage} of {totalPages} pages"
        />
      }
    >
      <LocationsTable />
    </PageLayout>
  );
}
