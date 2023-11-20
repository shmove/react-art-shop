function PageSelector({ currentPage, totalPages, setPage }) {

    function backSelectable() { return currentPage !== 1; }
    function nextSelectable() { return currentPage !== totalPages; }

    return (
        <div className="flex justify-center items-center mb-4">
            <button
                onClick={() => setPage(currentPage - 1)}
                disabled={!backSelectable()}
                className={"w-24" + (backSelectable() ? "" : " unselectable")}>
                Previous
            </button>
            <span className="text-cara-magenta font-bold text-xl mx-4">{currentPage} of {totalPages}</span>
            <button
                onClick={() => setPage(currentPage + 1)}
                disabled={!nextSelectable()}
                className={"w-24" + (nextSelectable() ? "" : " unselectable")}>
                Next
            </button>
        </div>
    )
}

export default PageSelector;