import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () =>{
    setCount(count + 1)
  };

  return (
    <>
   <div id='DivPadre'>
    <h3>Las plataformas de apuestas en línea dejan de funcionar en Brasil</h3>
        </div>
    <div id='DivParrafos'>
      <p>
        Las plataformas de apuestas deportivas y los casinos en línea, 
        así como toda su publicidad, quedaron fuera de servicio este martes en Brasil, 
        unos diez días después de que el presidente, Luiz Inácio Lula da Silva, dictó su prohibición.
        
      </p>
      
      <p>Desde hoy, los usuarios que intentan entrar a estas plataformas son redireccionados a una web gestionada por el gobierno que informa sobre el bloqueo de los servicios y la suspensión de todo tipo de anuncios publicitarios relacionados con el sector.</p>
    <p>"Acceso bloqueado. La plataforma a la que usted intentó entrar está fuera de servicio por determinación de la Medida Provisoria N° 1.394/26, que prohíbe las apuestas deportivas y los casinos digitales en Brasil desde el 25 de septiembre de 2026", se exhibe en letras grandes.</p>
    <p>
    La pantalla ofrece enlaces directos para gestionar la devolución del dinero remanente de las cuentas, un canal para denunciar páginas irregulares que continúen activas y accesos al sistema público de salud para atender eventuales problemas derivados del juego.
    </p>
    <p>
      El plazo para que los apostadores solicitaran el retiro voluntario de sus fondos venció este lunes. Hasta la tarde, el gobierno informó que había un saldo remanente de 1.330 millones de reales (unos 266 millones de dólares) pendiente de rescate.
    </p>
    Asimismo, detalló que la inmensa mayoría de estas cuentas registran montos pequeños, pues cerca del 92% tienen menos de 10 reales (2 dólares) y más del 96% no superan los 25 reales (5 dólares).
    <p>Entre el 7 y el 8 de octubre, las operadoras reportarán a los bancos la información de los titulares con saldo a favor y del 9 al 14 de octubre las entidades bancarias ejecutarán la restitución directa a los usuarios.</p>
   <p>En caso de surgir algún impedimento técnico o administrativo, los recursos serán custodiados por un banco estatal a partir del 14 de octubre para completar las devoluciones.</p>
   <p id='ParrafoSubTitulo'>Golpe financiero al fútbol y temor al mercado negro</p>



   </div>
    </>
  )
}

export default App
