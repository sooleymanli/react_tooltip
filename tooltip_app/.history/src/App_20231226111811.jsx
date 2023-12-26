
import './App.scss'
import CompanyLogo from './components/CompanyLogo'

function App() {
  const loremText100 ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere deleniti dicta maxime exercitationem mollitia nisi reiciendis! Repellat accusamus fugit ipsam voluptates! Consequatur non id quam illum possimus enim quia dolorem esse, similique tempore iusto error saepe nesciunt eaque sit aut eligendi nulla inventore impedit! Nobis dolor quidem, reprehenderit in error maiores excepturi aperiam aspernatur porro nihil explicabo voluptatibus ratione vero a alias exercitationem, placeat doloribus dignissimos culpa dicta, necessitatibus tempora nostrum deleniti. Natus totam earum fuga quis, laboriosam dolore modi doloremque voluptate delectus eaque nobis quam ea ratione qui voluptates exercitationem enim illo maiores deserunt, accusantium sequi error pariatur. At."
  const  lore
  return (
    <div className='app'>
      <CompanyLogo company={"Samsung"} tooltipText={loremText} />
      <CompanyLogo company={"Bosch"} tooltipText={loremText}/>
      <CompanyLogo company={"Tefal"} tooltipText={loremText}/>
    </div>
  )
}

export default App
