import { useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";

import Menu from "../components/menu";
import PageNavigator from "../components/page-navigator";
import JobPostsTable from "../components/job-posts-table";

export async function loader({ request }) {
  let queryString = request.url.split("?")[1];
  let data;
  if (!queryString) {
    data = await fetch(`${import.meta.env.VITE_BE_SERVER}/jobposts?p=1`);
  } else {
    data = await fetch(
      `${import.meta.env.VITE_BE_SERVER}/jobposts?${queryString}`
    );
  }
  return data;
}

export default function Root() {
  let loaderData = useLoaderData();
  let fetcher = useFetcher();

  const jobPostsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  let handlePageNavigation = (e) => {
    if (e.target.value === "prev") {
      setCurrentPage(currentPage - 1);
      fetcher.submit({ p: currentPage - 1 }, { method: "GET", action: "/" });
    } else if (e.target.value === "next") {
      setCurrentPage(currentPage + 1);
      fetcher.submit({ p: currentPage + 1 }, { method: "GET", action: "/" });
    } else {
      setCurrentPage(parseInt(e.target.value));
      fetcher.submit(
        { p: parseInt(e.target.value) },
        { method: "GET", action: "/" }
      );
    }
  };

  const [actionIsShown, setActionIsShown] = useState(true);
  const [agencyIsShown, setAgencyIsShown] = useState(true);
  const [regionIsShown, setRegionIsShown] = useState(true);
  const [posTitleIsShown, setPosTitleIsShown] = useState(true);
  const [monSalaryIsShown, setMonSalaryIsShown] = useState(true);
  const [itemNoIsShown, setItemNoIsShown] = useState(true);
  const [cloDateIsShown, setCloDateIsShown] = useState(true);

  function handleColViewChange(e) {
    switch (e.target.id) {
      case "action-cb":
        setActionIsShown(!actionIsShown);
        break;
      case "agency-cb":
        setAgencyIsShown(!agencyIsShown);
        break;
      case "region-cb":
        setRegionIsShown(!regionIsShown);
        break;
      case "pos-title-cb":
        setPosTitleIsShown(!posTitleIsShown);
        break;
      case "mon-salary-cb":
        setMonSalaryIsShown(!monSalaryIsShown);
        break;
      case "item-number-cb":
        setItemNoIsShown(!itemNoIsShown);
        break;
      case "closing-date-cb":
        setCloDateIsShown(!cloDateIsShown);
        break;
    }
  }

  return (
    <>
      <h1>CSC Job Portal (demo)</h1>

      <p>
        Note: This website, like every, may contain incomplete and/or inaccurate
        information.
      </p>

      <p>
        Check out the Civil Service Commission's official job portal at{" "}
        <a href="https://csc.gov.ph/career/" target="_blank">
          csc.gov.ph/career
        </a>
      </p>

      <Menu handleColViewChange={handleColViewChange} />

      <PageNavigator
        currentPage={currentPage}
        lastPage={Math.ceil(
          (fetcher.data ? fetcher.data.totalPosts : loaderData.totalPosts) /
            jobPostsPerPage
        )}
        handlePageNavigation={handlePageNavigation}
      />

      {!fetcher.data ? (
        <JobPostsTable
          actionIsShown={actionIsShown}
          agencyIsShown={agencyIsShown}
          regionIsShown={regionIsShown}
          posTitleIsShown={posTitleIsShown}
          monSalaryIsShown={monSalaryIsShown}
          itemNoIsShown={itemNoIsShown}
          cloDateIsShown={cloDateIsShown}
          jobPosts={loaderData.requestedPosts}
        />
      ) : (
        <JobPostsTable
          actionIsShown={actionIsShown}
          agencyIsShown={agencyIsShown}
          regionIsShown={regionIsShown}
          posTitleIsShown={posTitleIsShown}
          monSalaryIsShown={monSalaryIsShown}
          itemNoIsShown={itemNoIsShown}
          cloDateIsShown={cloDateIsShown}
          jobPosts={fetcher.data.requestedPosts}
        />
      )}

      <hr />

      <p>
        For any feature requests, feedbacks, bug reports, etc., you can reach me
        at <a href="mailto:marvinalegre@skiff.com">marvinalegre@skiff.com</a>.
      </p>
      <p>
        This project's repo is at{" "}
        <a href="https://github.com/marvinalegre/cscjobportal">
          github.com/marvinalegre/cscjobportal
        </a>
      </p>

      <hr />

      <div id="square"></div>
    </>
  );
}
