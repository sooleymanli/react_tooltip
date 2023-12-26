
import './App.scss'
import CompanyLogo from './components/CompanyLogo'

function App() {
  const loremText100 ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere deleniti dicta maxime exercitationem mollitia nisi reiciendis! Repellat accusamus fugit ipsam voluptates! Consequatur non id quam illum possimus enim quia dolorem esse, similique tempore iusto error saepe nesciunt eaque sit aut eligendi nulla inventore impedit! Nobis dolor quidem, reprehenderit in error maiores excepturi aperiam aspernatur porro nihil explicabo voluptatibus ratione vero a alias exercitationem, placeat doloribus dignissimos culpa dicta, necessitatibus tempora nostrum deleniti. Natus totam earum fuga quis, laboriosam dolore modi doloremque voluptate delectus eaque nobis quam ea ratione qui voluptates exercitationem enim illo maiores deserunt, accusantium sequi error pariatur. At."
  const loremText200="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ut aut optio esse, tempore odio unde dolor, corrupti ratione eius quisquam! Voluptates amet iste, aspernatur nihil tenetur, asperiores, cum sapiente fugiat suscipit incidunt eaque provident veniam et odio. Nam accusamus recusandae aspernatur eaque tempore perferendis autem corporis reiciendis, labore vel, suscipit molestiae molestias dolorum libero earum ea doloribus deserunt minima architecto? Placeat, similique autem eveniet vel exercitationem esse nulla modi obcaecati ad repudiandae itaque ab nisi maiores reiciendis eum eius sed. Explicabo ab atque quasi odio facilis, incidunt, sunt ratione quod nemo consequatur quaerat et earum id pariatur vel ullam aliquid reiciendis labore! Iusto maiores adipisci dolores itaque earum voluptates asperiores provident officiis. Exercitationem aut unde deserunt numquam vitae explicabo quibusdam tempora perferendis, molestias officiis repudiandae non. Quibusdam quisquam incidunt a est optio ipsam magni quis quidem eum repudiandae alias hic eos autem, accusamus quod eaque non minima enim! Consectetur, suscipit! Exercitationem cupiditate voluptate, fuga nisi quaerat praesentium iste soluta consectetur repellat in voluptatem eius sapiente odit accusamus iure ipsa sunt vero temporibus explicabo dolor ea laudantium neque quis. Veritatis libero ratione similique, ex nam alias cupiditate iste perferendis sint ab odit laborum, excepturi voluptatibus et obcaecati incidunt, quia aperiam!"
  return (
    <div className='app'>
      <CompanyLogo company={"Samsung"} tooltipText={loremText100} />
      <CompanyLogo company={"Bosch"} tooltipText={loremText200}/>
      <CompanyLogo company={"Apple"} tooltipText={loremText100} />
      <CompanyLogo company={"JBL"} tooltipText={loremText200}/>

    </div>
  )
}

export default App
