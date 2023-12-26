
import './App.scss'
import CompanyLogo from './components/CompanyLogo'

function App() {

  return (
    <div className='app'>
      <CompanyLogo company={"Samsung"} />
      <CompanyLogo company={"Bosch"} />
    </div>
  )
}

export default App
