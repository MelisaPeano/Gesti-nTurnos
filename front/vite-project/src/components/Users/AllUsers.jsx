import { useLocation } from 'react-router-dom';

const AllUsers = () => {
  const location = useLocation(); 
  const { state } = location; 
  return (
    <div style={{height: '100vh'}}>
        {state && state.length > 0 ? state.map((user) => (
        <div style={{height: '10vh', background: '#696969', padding: '.5rem', margin: '.5rem', width: '50vh'}} key={user.id}>
          <h2 style={{fontSize: '.8rem'}}>Nombre: {user.name}</h2>
          <h2 style={{fontSize: '.8rem'}}>Email: {user.email}</h2>
        </div>
      )) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  )
}

export default AllUsers