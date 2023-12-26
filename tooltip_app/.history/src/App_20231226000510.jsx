
import './App.scss'
import CompanyLogo from './components/CompanyLogo'

function App() {

  return (
    <div className='app'>
      <CompanyLogo company={"Samsung"} />
      <CompanyLogo company={"Bosch"} />
      <CompanyLogo company={"Tef"} />
    </div>
  )
}

export default App
