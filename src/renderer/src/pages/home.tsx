import { Link } from 'react-router-dom'

export function Home() {
  async function handleAdd() {
    const response = await window.api.fetchAllCustomers()
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
    </div>
  )
}
