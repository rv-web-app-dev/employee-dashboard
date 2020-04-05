import React from 'react'
import '../styles/CompanyHeader.css'

export const CompanyHeader = ({companyInfo}) => {
    let { companyName, companyMotto, companyEst } = companyInfo
    return (
        <div className="company-header">
            <div>{companyName}</div>
            <div className="motto-since">
                <div>{companyMotto}</div>
                <div>Since {companyEst}</div>
                <p>Copyrights protected</p>
            </div>
        </div>
    )
}