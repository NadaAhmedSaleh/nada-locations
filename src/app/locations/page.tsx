"use client";
import { useState } from "react";
import { Paginator } from "primereact/paginator";
import PageLayout from "../components/pageLayout/PageLayout";
import LocationsTable from "./locationsTable/LocationsTable";
export default function Locations() {
  const [page, setPage] = useState(0); // Zero-based index
  const rows = 10; // Records per page

  const handlePageChange = (e: any) => {
    setPage(e.page); // Update to the new page index
  };

  return (
    <PageLayout
      pageName="All Locations"
      headerRightComponent={
        <Paginator
          first={page * rows}
          rows={rows}
          totalRecords={1000} // Replace with actual totalRecords from server
          onPageChange={handlePageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          currentPageReportTemplate="{currentPage} of {totalPages} pages"
        />
      }
    >
      <LocationsTable page={page + 1} rows={rows} />
    </PageLayout>
  );
}
