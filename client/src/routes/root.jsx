import { useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import Menu from "../components/menu";

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

  // written by chatgpt
  function formatNumberWithCommas(number) {
    // Convert the number to a string
    const numberString = number.toString();

    // Use a regular expression to add commas every three digits from the right
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedNumber;
  }

  const jobs = loaderData.requestedPosts.map((job) => (
    <tr key={job.job_post_id}>
      <td style={{ display: actionIsShown ? "" : "none" }}>
        <a
          id="foo"
          href={`https://csc.gov.ph/career/jobs/` + job.job_post_id}
          target="_blank"
        >
          Get details
        </a>
      </td>
      <td style={{ display: agencyIsShown ? "" : "none" }}>{job.agency}</td>
      <td style={{ display: regionIsShown ? "" : "none" }}>{job.region}</td>
      <td style={{ display: posTitleIsShown ? "" : "none" }}>
        {job.position_title}
      </td>
      <td style={{ display: monSalaryIsShown ? "" : "none" }}>
        Php {formatNumberWithCommas(job.monthly_salary.slice(0, -2))}
      </td>
      <td style={{ display: itemNoIsShown ? "" : "none" }}>
        {job.plantilla_item_no}
      </td>
      <td style={{ display: cloDateIsShown ? "" : "none" }}>
        {job.closing_date.slice(0, 10)}
      </td>
    </tr>
  ));

  return (
    <>
      <>
        <h1>CSC Job Portal (demo)</h1>

        <p>
          Note: This website, like every, may contain incomplete and/or
          inaccurate information.
        </p>

        <p>
          Check out the Civil Service Commission's official job portal at{" "}
          <a href="https://csc.gov.ph/career/" target="_blank">
            csc.gov.ph/career
          </a>
        </p>
      </>

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

      <table>
        <thead>
          <tr>
            <th style={{ width: "80px", display: actionIsShown ? "" : "none" }}>
              Action
            </th>
            <th
              style={{ width: "250px", display: agencyIsShown ? "" : "none" }}
            >
              Agency
            </th>
            <th style={{ width: "80px", display: regionIsShown ? "" : "none" }}>
              Region
            </th>
            <th
              style={{ width: "350px", display: posTitleIsShown ? "" : "none" }}
            >
              Position Title
            </th>
            <th
              style={{
                width: "120px",
                display: monSalaryIsShown ? "" : "none",
              }}
            >
              Monthly Salary
            </th>
            <th style={{ display: itemNoIsShown ? "" : "none" }}>
              Plantilla Item Number
            </th>
            <th
              style={{ width: "90px", display: cloDateIsShown ? "" : "none" }}
            >
              Closing Date
            </th>
          </tr>
        </thead>
        <tbody>
          {!fetcher.data
            ? jobs
            : fetcher.data.requestedPosts.map((job) => (
                <tr key={job.job_post_id}>
                  <td style={{ display: actionIsShown ? "" : "none" }}>
                    <a
                      id="foo"
                      href={`https://csc.gov.ph/career/jobs/` + job.job_post_id}
                      target="_blank"
                    >
                      Get details
                    </a>
                  </td>
                  <td style={{ display: agencyIsShown ? "" : "none" }}>
                    {job.agency}
                  </td>
                  <td style={{ display: regionIsShown ? "" : "none" }}>
                    {job.region}
                  </td>
                  <td style={{ display: posTitleIsShown ? "" : "none" }}>
                    {job.position_title}
                  </td>
                  <td style={{ display: monSalaryIsShown ? "" : "none" }}>
                    Php{" "}
                    {formatNumberWithCommas(job.monthly_salary.slice(0, -2))}
                  </td>
                  <td style={{ display: itemNoIsShown ? "" : "none" }}>
                    {job.plantilla_item_no}
                  </td>
                  <td style={{ display: cloDateIsShown ? "" : "none" }}>
                    {job.closing_date.slice(0, 10)}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <>
        <hr />

        <p>
          For any feature requests, feedbacks, bug reports, etc., you can reach
          me at{" "}
          <a href="mailto:marvinalegre@skiff.com">marvinalegre@skiff.com</a>.
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
    </>
  );
}
