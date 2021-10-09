import React from 'react'
import { Pagination } from 'react-bootstrap'

const PageCount = () => {
    return (
        <Pagination size="sm">
            <Pagination.Prev />
                <Pagination.Ellipsis />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
            <Pagination.Next />
        </Pagination>
    )
}

export default PageCount
