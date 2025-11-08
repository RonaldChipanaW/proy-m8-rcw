
import './App.css'

function App() {


  return (
    <>
    <div className='container'>

      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <p className="title">Proyecto Final</p>
          <p className="subtitle">Ronald Humberto Chipana Wariste</p>
        </div>
      </section>

      <section className=''>
        <div className='content has-text-dark mt-6'>
          <h2 className='title has-text-dark'>Definición del Problema</h2>
          <h2 className='subtitle has-text-dark'>Identificación del Problema de Negocio</h2>
          <p>
            La organización ejecuta múltiples campañas publicitarias en Facebook Ads con presupuestos significativos, pero existe variabilidad en el rendimiento entre diferentes campañas, conjuntos de anuncios y regiones. Actualmente no se cuenta con un sistema predictivo que permita anticipar el desempeño de las campañas antes de su lanzamiento, lo que resulta en asignación subóptima de presupuesto y oportunidades perdidas de maximizar el ROI.
          </p>
          
        </div>

        <div className='content has-text-dark mt-6'>
          <h2 className='subtitle has-text-dark'>Objetivos Analíticos</h2>
          <p>Objetivo Principal: Desarrollar un modelo predictivo que estime el Costo por Resultado de campañas publicitarias con una precisión del 85% utilizando datos históricos de Facebook Ads.</p>
          <p>Métricas SMART:</p>
          <ul>
            <li>    
              Específico: Predecir "Costo por resultado" como variable continua
            </li>
            <li> 
              Medible: RMSE {'<'} 5 BOB en conjunto de prueba
            </li>
            <li>  
              Alcanzable: Con 147 registros históricos y 15+ variables predictoras
            </li>
            <li>
              Relevante: Mejorará la eficiencia del gasto publicitario en 15-20%
            </li>
            <li>
              Temporal: Modelo implementado en 4 semanas
            </li>
          </ul>
        </div>

        <div className='content has-text-dark mt-6'>
          <h2 className='subtitle has-text-dark'>Delimitación del Alcance</h2>
          <ul>
            <li>
              Variable Objetivo: Costo por resultado (numérica continua)
            </li>
            <li>
              Variables Predictoras:
                <ul>
                  <li>Región, Tipo de campaña, Estado de entrega</li>
                  <li>Alcance, Impresiones, Frecuencia</li>
                  <li>Tipo de resultado, Clics, CPC, CPM</li>
                  <li>Fechas de ejecución</li>
                </ul>
            </li>
            <li>
              Restricciones:
               <ul>
                  <li>Datos limitados a campañas bolivianas</li>
                  <li>Presupuesto computacional moderado</li>
                  <li>Cumplimiento de políticas de privacidad de datos</li>
                </ul>
            </li>
          </ul>
          


        </div>

        <div className='content has-text-dark mt-6'>
          <h2 className='subtitle has-text-dark'>Hipótesis Iniciales</h2>
          <ul>
            <li>
            Las campañas de "Tráfico" tienen menor costo por resultado que las de "Reconocimiento"
            </li>
            <li>
            La región "La Paz" presenta mayor eficiencia publicitaria
            </li>
            <li>
              La frecuencia de impresiones impacta negativamente en el costo por resultado después de cierto umbral
            </li>
            <li>
              Los clics en enlace son el predictor más fuerte del costo por resultado
            </li>
          </ul>
        </div>

        <div className='content has-text-dark'>
          <h2 className='subtitle has-text-dark'>Criterio de Éxito</h2>
          <ul>
            <li>
            Métrica Principal: RMSE (Root Mean Square Error) {'<'} 5 BOB
            </li>
            <li>
            Métrica Secundaria: R² {'>'} 0.85 en conjunto de prueba
            </li>
            <li>
            Validación: Cross-validation 5-fold
            </li>
          </ul>
          
        </div>
        

      </section>
      <section className='container mt-6'>
        
        <h2 className='title has-text-dark'>Determinación de la Técnica Analítica</h2>
        <div className='content has-text-dark'>
          <h2 className='subtitle has-text-dark'>Análisis Exploratorio de Datos Preliminar</h2>
          Estructura de Datos:

          <p>147 observaciones, 20 variables</p>

          Variables mixtas: numéricas, categóricas, temporales

          Presencia de valores nulos en algunas columnas

          <p>Patrones Iniciales Identificados:</p>

          Rango de "Costo por resultado": 0.01 - 1.72 BOB

          Campañas más frecuentes: "TK Enero General", "TK 25-11-22 Ronald"

          Regiones principales: La Paz, Cochabamba, Santa Cruz
        </div>

        <div className='content has-text-dark'>
          <h2 className='subtitle has-text-dark'>Clasificación de Técnicas</h2>
          <p>Problema: Regresión (variable continua: Costo por resultado)</p>
          <p>Técnicas Consideradas:</p>

        </div>
        <div className='content has-text-dark'>
          <h2 className='subtitle has-text-dark'>Selección Justificada</h2>
          <p>Técnica Principal:Random Forest Regressor</p>
          <p>Función Matemática:</p>

        </div>

        
        
      </section>
    </div>


    </>
  )
}

export default App
