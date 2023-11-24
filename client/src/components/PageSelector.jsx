import './styles/PageSelector.css';

function PageSelector({ currentPage, totalPages, setPage }) {

    function backSelectable() { return currentPage !== 1; }
    function nextSelectable() { return currentPage !== totalPages; }

    return (
        <div className="page-selector">
            <button
                onClick={() => setPage(currentPage - 1)}
                disabled={!backSelectable()}
                className={(backSelectable() ? "" : " unselectable")}>
                Previous
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button
                onClick={() => setPage(currentPage + 1)}
                disabled={!nextSelectable()}
                className={(nextSelectable() ? "" : " unselectable")}>
                Next
            </button>
        </div>
    )
}

export default PageSelector;