import React, { Component } from 'react'
import '../styles/EmployeeDialog.css'
let employeeDialog = ''

class EmployeeDialog extends Component {

    componentDidMount() {
        employeeDialog = document.getElementById('favDialog')
        window.onclick = (event) => {
            if (event.target === employeeDialog) {
                this.closeModal()
            }
        }
    }

    componentDidUpdate() {
        this.props.showModal && employeeDialog.showModal()
    }

    showModal = (event) => event.currentTarget.showModal()

    closeModal = () => {
        document.getElementsByName(this.props.clickedCardDetail.id)[0].style.backgroundColor='white'
        employeeDialog.close()
        this.props.toggleModalState()
    }

    render() {
        let { id, avatar, firstName, lastName, bio, jobTitle, age, dateJoined } = this.props.clickedCardDetail
        return (
            <dialog id="favDialog">
                <div className="employeeDetail" name={id}>
                    <div className="left-section">
                        <div><img src={avatar} alt="Avatar" /></div>
                        <div><label>Job Title: </label><b>{jobTitle}</b></div>
                        <div><label>Age: </label>{age}</div>
                        <div><label>Date Joined: </label><br />{dateJoined}</div>
                    </div>
                    <div className="right-section">
                        <h4>{firstName} {lastName}</h4>
                        <hr />
                        <div><p>{bio}</p></div>
                    </div>
                    <div id="closeModal" onClick={this.closeModal} >
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </dialog >
        )
    }
}

export default EmployeeDialog