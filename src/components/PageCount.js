import React from 'react'
import { Pagination } from 'react-bootstrap'

const PageCount = ({ eventsPerPage, totalEvents, paginate}) => {

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    console.log(totalEvents)

    return (
        <>
            <div>
                {totalEvents} events total
            </div>
            <Pagination size="sm" className="PageCount">
                {pageNumbers.map(number => (
                    <Pagination.Item key={number}>
                        <a onClick={() => paginate(number)} href="!#">{number}</a>
                    </Pagination.Item>
                ))}
            </Pagination>
        </>

    )
}

export default PageCount
