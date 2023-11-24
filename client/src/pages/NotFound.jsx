import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="font-serif"><strong>404 Not Found</strong></h1>
            <Link to="/"><h3 className="underline hover-raise">Home</h3></Link>
        </div>
    );
}

export default NotFound;