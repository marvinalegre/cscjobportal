export default function JobPostsTable({
  actionIsShown,
  agencyIsShown,
  regionIsShown,
  posTitleIsShown,
  monSalaryIsShown,
  itemNoIsShown,
  cloDateIsShown,
  jobPosts,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "80px", display: actionIsShown ? "" : "none" }}>
            Action
          </th>
          <th style={{ width: "250px", display: agencyIsShown ? "" : "none" }}>
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
          <th style={{ width: "90px", display: cloDateIsShown ? "" : "none" }}>
            Closing Date
          </th>
        </tr>
      </thead>
      <tbody>
        {jobPosts.map((job) => (
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
              Php {formatNumberWithCommas(job.monthly_salary.slice(0, -2))}
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
  );
}

function formatNumberWithCommas(number) {
  // Convert the number to a string
  const numberString = number.toString();

  // Use a regular expression to add commas every three digits from the right
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}
