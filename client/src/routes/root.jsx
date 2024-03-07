import { useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";

import Menu from "../components/menu";
import JobPostsTable from "../components/job-posts-table";

function mid(a, b) {
  return Math.floor((a + b) / 2);
}
function getPaginationNumbers(currentPage, lastPage) {
  if (currentPage === 1) {
    return [1, mid(1, lastPage), lastPage];
  } else if (currentPage === 2) {
    return [1, 2, mid(2, lastPage), lastPage];
  } else if (currentPage === lastPage) {
    return [1, mid(1, lastPage), lastPage];
  } else if (currentPage === lastPage - 1) {
    return [1, mid(1, lastPage - 1), lastPage - 1, lastPage];
  } else {
    return [
      1,
      mid(1, currentPage),
      currentPage,
      mid(currentPage, lastPage),
      lastPage,
    ];
  }
}

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

  const jobsPerPage = 10;
  const [currPage, setCurrPage] = useState(1);
  const lastPage = Math.ceil(
    (fetcher.data ? fetcher.data.totalPosts : loaderData.totalPosts) /
      jobsPerPage
  );
  const [pagination, setPagination] = useState(
    getPaginationNumbers(currPage, lastPage)
  );

  let handlePageClick = (e) => {
    if (e.target.value === "prev") {
      fetcher.submit({ p: currPage - 1 }, { method: "GET", action: "/" });
      setCurrPage(currPage - 1);
      setPagination(getPaginationNumbers(currPage - 1, lastPage));
    } else if (e.target.value === "next") {
      fetcher.submit({ p: currPage + 1 }, { method: "GET", action: "/" });
      setCurrPage(currPage + 1);
      setPagination(getPaginationNumbers(currPage + 1, lastPage));
    } else {
      setCurrPage(parseInt(e.target.value));
      setPagination(getPaginationNumbers(parseInt(e.target.value), lastPage));
      fetcher.submit(
        { p: parseInt(e.target.value) },
        { method: "GET", action: "/" }
      );
    }
  };

  const pages = pagination.map((page, index) => (
    <div key={index} className="page-number">
      <button
        className="page-number"
        value={page}
        onClick={handlePageClick}
        disabled={currPage === page ? true : false}
      >
        {page}
      </button>
      {index < pagination.length - 1 && pagination[index + 1] !== page + 1 && (
        <span>...</span>
      )}
    </div>
  ));

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

      <>
        <div className="page-number">
          <button
            disabled={currPage === 1 ? true : false}
            value="prev"
            onClick={handlePageClick}
          >
            Previous
          </button>
        </div>
        {pages}
        <div className="page-number">
          <button
            disabled={currPage === lastPage ? true : false}
            value="next"
            onClick={handlePageClick}
          >
            Next
          </button>
        </div>
      </>

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

      <div id="turtle"></div>
    </>
  );
}
