import React, { Component } from 'react'
import './styles/App.css'
import data from './sample-data.json'
import dynamicSort from './utils/dynamicSort'
import EmployeeGrid from './components/EmployeeGrid'
import EmployeeHeader from './components/EmployeeHeader'
import { CompanyHeader } from './components/CompanyHeader'
import EmployeeDialog from './components/EmployeeDialog'
let { employees, companyInfo } = data
const FIRSTNAME = "firstName"
const NAME_SELECTOR = "name"
let CLICKEDCARDCOLOR = "lightgray"
let clickedCardId=''

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: employees.sort(dynamicSort(FIRSTNAME)),
      clickedCardDetail : {},
      showModal: false
    }
  }

  searchEmployees = (event) => {
    this.setState({
      employees: employees.filter(employee =>
        (employee.firstName + employee.lastName).search(new RegExp(event.target.value, "i")) !== -1
      )
    })
  }

  sortEmployees = (event) => {
    this.setState({
      employees: employees.sort(dynamicSort(event.target.value))
    })
  }

  changeCardColor = (event) => {
    event.currentTarget.style.backgroundColor = CLICKEDCARDCOLOR
  }

  toggleModalState = () =>{
    //document.getElementById(clickedCardId).style.backgroundColor = 'white'
    this.setState({
      showModal : !this.state.showModal
    })
  }

  fetchCardId = (event) => {
    clickedCardId = event.currentTarget.getAttribute(NAME_SELECTOR)
    this.changeCardColor(event)
    this.setState({
      clickedCardDetail : this.state.employees.find(emp => emp.id === clickedCardId),
      showModal : true
    })
  }
  
  render() {
    return (
      <div>
        <CompanyHeader companyInfo={companyInfo} />
        <EmployeeHeader changeSortOrder={this.sortEmployees}
          searchEmployees={this.searchEmployees} />
        <EmployeeGrid employees={this.state.employees} fetchCardId={this.fetchCardId} />
        <EmployeeDialog showModal={this.state.showModal}
         clickedCardDetail={this.state.clickedCardDetail} 
         toggleModalState={this.toggleModalState}
         />
      </div>
    )
  }
}

export default App;
