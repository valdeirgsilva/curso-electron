import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1>Página HOME!!!</h1>
      <h3>TESTEEEEEEE!!!</h3>
      <Link to="/create">Ir para a página Create</Link>
    </div>
  )
}
