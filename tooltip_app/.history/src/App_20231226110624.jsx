
import './App.scss'
import CompanyLogo from './components/CompanyLogo'

function App() {

  return (
    <div className='app'>
      <CompanyLogo company={"Samsung"} tooltipText={""} />
      <CompanyLogo company={"Bosch"} />
      <CompanyLogo company={"Tefal"} />
    </div>
  )
}

export default App
