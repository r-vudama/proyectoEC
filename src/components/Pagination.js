import React from "react";

const Pagination = ({page, setPage}) => {

    return(
        <div className="paginacion">
            <button onClick={() => setPage(page -1)} className="botones">-</button>
            <input type="number" value={page} disabled/>
            <button onClick={() => setPage(page +1)} className="botones">+</button>
        </div>
    )
}

export default Pagination;