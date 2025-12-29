export function Create() {
  async function handleAddCustomer() {
    const doc = {
      name: 'Lucas Silva',
      email: 'lucas@teste.com',
      phone: '21999999999',
      address: 'Rua X, Centro',
      role: 'Frontend',
      status: true
    }

    const response = await window.api.addCustomer(doc)
    console.log(response)
  }
  return (
    <div>
      <h1>Página Novo cliente!!!</h1>

      <button onClick={handleAddCustomer}>CADASTRAR</button>
    </div>
  )
}
