import ServicesStyle from "./sevicesStyled";


const servicesComponent = () => {
  return (
    <ServicesStyle>
    
      <div className="services">
        <h2>Alineado</h2>
        <p>Una alineación adecuada mejora la estabilidad, dirección y duración de los neumáticos. También ahorra combustible al reducir la resistencia al rodar.</p>
      </div>
      <div className="services">
        <h2>Balanceo</h2>
        <p>El balanceo de neumáticos asegura una conducción suave y segura, prolonga la vida útil del vehículo y mejora el rendimiento</p>
      </div>
      <div className="services">
        <h2>Neumáticos</h2>
        <p>Siempre la mejor cálidad y las mejores marcas de neumáticos, colocación</p>
      </div>
    
    </ServicesStyle>
  )
} 

export default servicesComponent;