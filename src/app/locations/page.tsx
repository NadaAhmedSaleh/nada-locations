"use client";
import { useState } from "react";
import { Paginator } from "primereact/paginator";
import PageLayout from "../components/pageLayout/PageLayout";
import { LocationsTable } from "./locationsTable/LocationsTable";
export default function Locations() {
  const [page, setPage] = useState(0);
  const rows = 15;
  const [totalRecords, setTotalRecords] = useState(0);

  const handlePageChange = (e: any) => {
    setPage(e.page);
  };

  return (
    <PageLayout
      pageName="All Locations"
      headerRightComponent={
        <Paginator
          first={page * rows}
          rows={rows}
          totalRecords={totalRecords} // Fetch from backend
          onPageChange={handlePageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          currentPageReportTemplate="{currentPage} of {totalPages} pages"
        />
      }
    >
      <LocationsTable
        page={page + 1}
        rows={rows}
        setTotalRecords={setTotalRecords}
      />
    </PageLayout>
  );
}
