import React from 'react'
import '../styles/EmployeeGrid.css'

const getCardItems = (employees, fetchCardId) => {
    return employees.map(employee => {
        let { id, avatar, firstName, lastName, bio } = employee
        return (
            <div key={id} className="card" onClick={fetchCardId} name={id}>
                <img src={avatar} alt="Avatar" />
                <div className="info">
                    <h4><b>{firstName} {lastName}</b></h4>
                    <div><p>{bio}</p></div>
                </div>
            </div>
        )
    })
}

const EmployeeGrid = ({ employees, fetchCardId }) => {
    return (
        <div className="card-grid">
            {employees.length > 0 && getCardItems(employees, fetchCardId)}
        </div>
    )
}

export default EmployeeGrid