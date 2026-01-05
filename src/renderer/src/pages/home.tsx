import { Link } from 'react-router-dom'

export function Home() {
  async function handleAdd() {
    const response = await window.api.fetchAllCustomers()
    console.log(response)
  }

  async function handleCustomerById() {
    const docId = '558df43f-44fc-4634-bb6e-59557cd3a565'
    const response = await window.api.fetchCustomerById(docId)
    console.log(response)
  }

  return (
    <div>
      <h1>Página HOME!!!</h1>
      <h3>TESTEEEEEEE!!!</h3>
      <Link to="/create">Ir para a página Create</Link>
      <br />
      <br />

      <button onClick={handleAdd}>BUSCAR USUÁRIOS</button>
      <br />
      <br />
      <button onClick={handleCustomerById}>BUSCAR USUÁRIO PELO ID</button>
    </div>
  )
}
