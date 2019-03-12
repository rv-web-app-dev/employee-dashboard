import React from 'react'
import '../styles/EmployeeHeader.css'

const EmployeeHeader = (props) => {
    return (
        <header className="filters-header">
            <div className="page-name">Our Employees</div>

            <div id="sort-by-name">
                <label htmlFor="sortBy">Sort by:  </label>
                <select id="sortBy" onChange={props.changeSortOrder}>
                    <option value="firstName">firstname</option>
                    <option value="lastName">lastname</option>
                </select>
            </div>

            <div id="search">
                <label htmlFor="card-search">Search:  </label>
                <input type="search" id="card-search" name="q"
                    aria-label="Search through card content" 
                    onChange={props.searchEmployees}/>
            </div>

        </header>
    )
}

export default EmployeeHeader