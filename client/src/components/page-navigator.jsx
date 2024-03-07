export default function PageNavigator({
  currentPage,
  lastPage,
  handlePageNavigation,
}) {
  const pagination = getPaginationNumbers(currentPage, lastPage);

  return (
    <>
      <div className="page-number">
        <button
          disabled={currentPage === 1 ? true : false}
          value="prev"
          onClick={handlePageNavigation}
        >
          Previous
        </button>
      </div>
      {pagination.map((page, index) => (
        <div key={index} className="page-number">
          <button
            className="page-number"
            value={page}
            onClick={handlePageNavigation}
            disabled={currentPage === page ? true : false}
          >
            {page}
          </button>
          {index < pagination.length - 1 &&
            pagination[index + 1] !== page + 1 && <span>...</span>}
        </div>
      ))}
      <div className="page-number">
        <button
          disabled={currentPage === lastPage ? true : false}
          value="next"
          onClick={handlePageNavigation}
        >
          Next
        </button>
      </div>
    </>
  );
}

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
