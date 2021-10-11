import React from 'react'
import { Pagination } from 'react-bootstrap'

const PageCount = ({ eventsPerPage, totalEvents, paginate}) => {

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    return (
        <Pagination size="sm" className="PageCount">
            {pageNumbers.map(number => (
                <Pagination.Item key={number}>
                    <a onClick={() => paginate(number)} href="!#">{number}</a>
                </Pagination.Item>
            ))}
        </Pagination>
        // <nav>
        //     <ul>
        //         {pageNumbers.map(number => (
        //             <li key={number}>
        //                 <a onClick={() => paginate(number)} href='!#'>{number}</a>
        //             </li>
        //         ))}
        //         <li>Hello?</li>
        //     </ul>
        // </nav>
    )
}

export default PageCount
