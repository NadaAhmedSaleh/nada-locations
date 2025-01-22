"use client";
import { useState } from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import { Paginator } from "primereact/paginator";

export default function Locations() {
  const [page, setPage] = useState(1); // Page index starts at 0 in PrimeReact

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
      locations content
    </PageLayout>
  );
}
