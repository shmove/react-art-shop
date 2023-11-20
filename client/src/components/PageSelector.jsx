function PageSelector({ currentPage, totalPages, setPage }) {

    return (
        <div className="flex justify-center items-center my-4">
            <button
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-cara-violet text-cara-whiter transition hover:bg-cara-magenta font-bold rounded-xl p-2 w-24">
                Previous
            </button>
            <span className="text-cara-magenta font-bold text-xl mx-4">{currentPage} of {totalPages}</span>
            <button
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-cara-violet text-cara-whiter transition hover:bg-cara-magenta font-bold rounded-xl p-2 w-24">
                Next
            </button>
        </div>
    )
}

export default PageSelector;