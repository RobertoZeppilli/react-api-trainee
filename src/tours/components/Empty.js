import React from 'react'

const Empty = () => {
    return (
        <div className="empty">
            <h3>No Tours left!</h3>
            <div className="refresh">
                <button onClick={() => window.location.reload()} class="btn btn-refresh">
                    refresh
                </button>
            </div>
        </div>
    )
}

export default Empty
