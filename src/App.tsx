import React from 'react';

// Color principal personalizado
const PRIMARY_COLOR = '#31287B'; // Nuevo color principal: Morado Oscuro
const SECONDARY_COLOR = '#4a4387'; // Color para elementos secundarios y bordes claros

// Componente para la Tarjeta de Información
interface CardProps {
  title: string;
  children: React.ReactNode;
  icon: string; // Icono de Lucide-react (simulado con emoji o SVG por el single-file)
  colorClass: string;
}

// Componente para mostrar un placeholder de gráfico grande y responsive
const ChartPlaceholder: React.FC<{ title: string; imageUrl: string }> = ({ title, imageUrl }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
    <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h3>
    <div className="w-full relative pt-[55%] md:pt-[45%] overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center">
      {/* Usamos una imagen placeholder temporal que será reemplazada por el gráfico de Colab.
        CLAVE: Hemos cambiado 'object-cover' a 'object-contain' para preservar la proporción de la imagen.
      */}
      <img
        src={imageUrl}
        alt={`Placeholder para el gráfico: ${title}`}
        className="w-full h-full absolute top-0 left-0 object-contain rounded-lg"
        onError={(e) => {
          // Fallback simple si la imagen no carga
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.style.display = 'none';
          const fallbackDiv = document.createElement('div');
          fallbackDiv.className = 'w-full h-full absolute top-0 left-0 flex items-center justify-center text-gray-500 text-sm';
          fallbackDiv.textContent = 'ESPACIO PARA GRÁFICO: Reemplazar URL o incrustar código HTML.';
          target.parentElement?.appendChild(fallbackDiv);
        }}
      />
    </div>
  </div>
);

// Sección para la interpretación de resultados
const InterpretationSection: React.FC<{ title: string }> = ({ title }) => (
  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-inner">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm italic">
      [Espacio reservado para el análisis y las conclusiones clave del gráfico superior.]
    </p>
  </div>
);


// Nota: En un entorno de desarrollo real, usarías 'lucide-react' o similar.
// Aquí usaremos una combinación de emojis y clases de Tailwind para los íconos.
const Card: React.FC<CardProps> = ({ title, children, icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-t-4"
       style={{ borderColor: colorClass }}>
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3" style={{ color: colorClass }}>{icon}</span>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 space-y-3">
      {children}
    </div>
  </div>
);

// Componente para mostrar las métricas SMART
const SmartObjective: React.FC<{ objective: string }> = ({ objective }) => (
  <li className="flex items-start">
    <span className="text-green-500 mr-2 mt-1">✓</span>
    <p className="text-sm">{objective}</p>
  </li>
);

// Componente principal de la aplicación
const App: React.FC = () => {
  // Configuración de la aplicación
  const projectName = "Optimización Predictiva de Inversión por Tipología de Mercado Regional";
  const sprintTitle = "Ronald Chipana Wariste";
  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62WdhWp7qvnun38z3CZf3txhIIjvB0bUBbA&s";

  return (
    // Contenedor principal con un fondo sutil y fuente Inter
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8">
      {/* Encabezado Principal */}
      <header 
        className="text-center py-10 mb-8 text-white rounded-lg shadow-xl"
        style={{ backgroundColor: PRIMARY_COLOR }} // Aplicamos el nuevo color principal
      >
        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <img 
            src={logoUrl} 
            alt="Logo del Proyecto" 
            className="w-16 h-16 rounded-full shadow-md" 
            onError={(e) => {
              // Fallback si la imagen del logo no carga
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = 'none';
            }}
          />
        </div>

        {/* TÍTULO */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Proyecto Final - Modelamiento de Dato I
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          {projectName}
        </h1>
        <p 
          className="text-2xl sm:text-3xl font-light opacity-90 pt-2 inline-block px-4 border-t"
          style={{ borderColor: SECONDARY_COLOR }} // Borde secundario para contraste
        >
          {sprintTitle}
        </p>
      </header>

      {/* Contenido de las Secciones del Sprint */}
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-800 border-b border-gray-300 pb-2 mb-6 mt-12">
          Definición del Problema
        </h2>

        {/* BLOQUE DE REQUERIMIENTOS (3 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          
          {/* SECCIÓN 1: Definición del Problema (Rojo) */}
          <Card 
            title="Identificar el Problema de Negocio" 
            icon="🧩" 
            colorClass="#ef4444" 
          >
            <h4 className="font-semibold text-gray-700">Problema de Negocio:</h4>
            <p className="text-lg">CODESIGN es una academia de formacion continua, las campañas publicitarias en diferentes regiones de Bolivia presentan variaciones significativas en eficiencia y costo, resultando en una asignación subóptima del presupuesto publicitario.</p>


          </Card>
          
          {/* Card de Alcance e Hipótesis (Verde) */}
          <Card 
            title="Pregunta de Investigación" 
            icon="🔍" 
            colorClass="#10b981" 
          >
            <p className="text-lg">¿Cómo la segmentación de mercados regionales mediante clustering de comportamiento publicitario mejora la predictibilidad de la eficiencia de inversión en campañas digitales en Bolivia?</p>

          </Card>

          {/* SECCIÓN 2: Determinación de la Técnica Analítica (Nuevo Primario) */}
          <Card 
            title="Hipótesis Estadística" 
            icon="🕴️" 
            colorClass={PRIMARY_COLOR} 
          >
            <h4 className="font-semibold text-gray-700">HIPÓTESIS NULA (H₀)</h4>
            <p className="text-sm">No existe diferencia significativa en la capacidad predictiva entre el modelo híbrido (clustering + regresión múltiple) y los modelos tradicionales de regresión simple para predecir resultados de campañas publicitarias en diferentes regiones de Bolivia.</p>
            <h4 className="font-semibold text-gray-700 mt-4">HIPÓTESIS ALTERNA (Hₐ)</h4>
            <p className="text-sm">El modelo híbrido que combina clustering de mercados regionales con regresión múltiple específica por cluster reduce significativamente el error de predicción (RMSE) en al menos un 10% comparado con los modelos de regresión tradicionales para predecir resultados de campañas publicitarias en Bolivia.</p>
            
            {/* Bloque visualmente distinto para la fórmula */}

          </Card>
        </div>


        {/* BLOQUE DE REQUERIMIENTOS (3 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* SECCIÓN 1: Definición del Problema (Rojo) */}
          <Card 
            title="Métrica de Éxito" 
            icon="🧭" 
            colorClass="#ef4444" 
          >
            
            <h4 className="font-semibold text-gray-700 mt-4">Objetivos Analíticos SMART:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <SmartObjective objective="Predecir el número de resultados (clics/conversiones) con un error cuadrático medio (RMSE) inferior a 15." />
              <SmartObjective objective="Segmentar regiones en 3 clusters basados en comportamiento de mercado con una métrica de cohesión (silhouette score) > 0.5." />
              <SmartObjective objective="Optimizar la asignación de presupuesto por tipo de mercado con una mejora del 10% en eficiencia." />
            </ul>
          </Card>
          
          {/* Card de Alcance e Hipótesis (Verde) */}
          <Card 
            title="Alcance" 
            icon="🎯" 
            colorClass="#10b981" 
          >
            <h4 className="font-semibold text-gray-700">Alcance:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Variables objetivo: Resultados (conversiones)</li>
              <li>Variables predictoras: Importe gastado, Región, Tipo de anuncio</li>
              <li>Restricciones: Datos históricos 2022-2025, presupuesto limitado por región</li>
            </ul>

          </Card>


        </div>



          {/* BLOQUE DE REQUERIMIENTOS (3 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* SECCIÓN 2: Determinación de la Técnica Analítica (Nuevo Primario) */}
          <Card 
            title="Técnica Analítica Central" 
            icon="🧠" 
            colorClass={PRIMARY_COLOR} 
          >
            <h4 className="font-semibold text-gray-700">Técnica Principal:</h4>
            <p className="text-sm">Modelo Híbrido (Clustering + Regresión).</p>
            
            <h4 className="font-semibold text-gray-700 mt-4">Función Matemática:</h4>
            {/* Bloque visualmente distinto para la fórmula */}
            <div className="bg-gray-800 text-yellow-300 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono mt-2 shadow-inner">
              <p className="mb-2 text-gray-400">// Para cada cluster k:</p>
              <p className="mb-3">
                <span className="text-pink-400">Y</span><sub className="text-pink-400">k</sub> = 
                <span className="text-green-300"> β</span><sub className="text-green-300">0k</sub> + 
                <span className="text-green-300"> β</span><sub className="text-green-300">1k</sub> * <span className="text-blue-300"> X</span><sub className="text-blue-300">gasto</sub> + 
                <span className="text-red-400"> ε</span><sub className="text-red-400">k</sub>
              </p>
              <p>Donde:</p>
              <ul className="ml-4 space-y-1">
                <li><span className="text-pink-400">Y</span><sub className="text-pink-400">k</sub>: Resultados predichos para cluster k</li>
                <li><span className="text-blue-300">X</span><sub className="text-blue-300">gasto</sub>: Importe gastado (BOB)</li>
                <li><span className="text-green-300">β</span><sub className="text-green-300">i</sub>: Parámetros específicos del cluster k</li>
                <li><span className="text-red-400">ε</span><sub className="text-red-400">k</sub>: Error del modelo para cluster k</li>
              </ul>
            </div>
          </Card>


                      {/* SECCIÓN 4 & 5: Comparación y Optimización (Violeta) */}
            <Card 
              title="Criterios de Evaluación y Optimización" 
              icon="📊" 
              colorClass="#8b5cf6" 
            >
              
              <div className="space-y-4">
                <div className="p-3 bg-violet-50 rounded-lg border border-violet-200">
                  <h4 className="font-semibold text-gray-700 flex items-center mb-1">
                    <span className="text-violet-600 text-lg mr-2">⭐</span> Métrica Principal
                  </h4>
                  <p className="text-sm font-bold text-violet-700">RMSE (Root Mean Square Error)</p>
                </div>
                
                <div className="p-3 bg-violet-50 rounded-lg border border-violet-200">
                  <h4 className="font-semibold text-gray-700 flex items-center mb-1">
                    <span className="text-violet-600 text-lg mr-2">⬇️</span> Criterio Preciso de Optimización
                  </h4>
                  <p className="text-sm">Minimizar RMSE.</p>
                </div>

                <div className="p-3 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-gray-700 flex items-center mb-1">
                    <span className="text-red-500 text-lg mr-2">❌</span> Criterios Inadecuados
                  </h4>
                  <p className="text-sm text-gray-500">Interpretabilidad, escalabilidad, tiempo de cómputo (en esta fase).</p>
                </div>
              </div>
            </Card>
        </div>


        
        {/* NUEVA SECCIÓN: VISUALIZACIONES Y RESULTADOS */}
        <h2 className="text-3xl font-extrabold text-gray-800 border-b border-gray-300 pb-2 mb-6 mt-12">
          Determinación de la Técnica Analítica
        </h2>
        <h2 className="text-3xl font-bold text-gray-800 pb-2 mb-6 mt-12">
          Análisis Exploratorio de Datos (EDA) 
        </h2>

        <div className="space-y-8 mb-12">
            {/* GRÁFICO 1: Comparación de Modelos (RMSE) */}
            <ChartPlaceholder 
                title="Gráfico 1: Distribución de eficiencia por Región"
                // Placeholder temporal de 1200x500
                imageUrl="../img/img1.png" 
            />
            <InterpretationSection 
                title="La Paz y Cochabamba muestran alta variabilidad en eficiencia, mientras Potosí y Pando presentan distribuciones más concentradas pero con valores generalmente más bajos." 
            />
            
            {/* GRÁFICO 2: Visualización de Clusters Regionales */}
            <ChartPlaceholder 
                title="Gráfico 2: Realación entre gastos resultados por Región"
                // Placeholder temporal de 1200x500
                imageUrl="../img/img2.png" 
            />
            {/* INTERPRETACIÓN 2 */}
            <InterpretationSection 
                title="Relación positiva entre gasto y resultados, pero con rendimientos decrecientes: mayores inversiones no garantizan proporcionalmente más resultados, especialmente en La Paz y Santa Cruz." 
            />
        </div>

        {/* NUEVA SECCIÓN: VISUALIZACIONES Y RESULTADOS */}
        <h2 className="text-3xl font-extrabold text-gray-800 border-b border-gray-300 pb-2 mb-6 mt-12">
          DETERMINACIÓN DE LA TÉCNICA ANALÍTICA
        </h2>

        <div className="space-y-8 mb-12">
            {/* GRÁFICO 1: Comparación de Modelos (RMSE) */}
            <ChartPlaceholder 
                title="Gráfico 3: ANÁLISIS PARA SELECCIÓN DE TÉCNICA:"
                // Placeholder temporal de 1200x500
                imageUrl="../img/img3.png" 
            />

            {/* INTERPRETACIÓN 2 */}
            <InterpretationSection 
                title="El codo en K=3 clusters indica el punto óptimo donde agregar más grupos no mejora significativamente la cohesión interna de los clusters." 
            />
        </div>


          <Card 
            title="Técnica Seleccionada" 
            icon="🧠" 
            colorClass={PRIMARY_COLOR} 
          >
            <h4 className="font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-2">TÉCNICA SELECCIONADA:</h4>
            <p className="text-sm font-bold text-gray-800">MODELO HÍBRIDO (CLUSTERING + REGRESIÓN)</p>

            <h4 className="font-semibold text-gray-700 mt-4">Justificación:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Clustering (K-means): Descubre patrones naturales en el comportamiento regional.</li>
                <li>Regresión Múltiple: Modela relación gasto-resultados específica por cluster.</li>
                <li>Ventaja: Captura heterogeneidad regional vs. modelo único.</li>
            </ul>
            
            <h4 className="font-semibold text-gray-700 mt-4">Función Matemática del Modelo Híbrido:</h4>
            {/* Bloque visualmente distinto para la fórmula */}
            <div className="bg-gray-800 text-yellow-300 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto font-mono mt-2 shadow-inner">
              <p className="mb-2 text-gray-400">// Para cada cluster k ∈ {'{'}1,2,3{'}'}:</p>
              <p className="mb-3">
                <span className="text-pink-400">Y</span><sub className="text-pink-400">k</sub> = 
                <span className="text-green-300"> β</span><sub className="text-green-300">0k</sub> + 
                <span className="text-green-300"> β</span><sub className="text-green-300">1k</sub> * <span className="text-blue-300"> X</span><sub className="text-blue-300">gasto</sub> + 
                <span className="text-green-300"> β</span><sub className="text-green-300">2k</sub> * <span className="text-blue-300"> X</span><sub className="text-blue-300">region</sub> + 
                <span className="text-red-400"> ε</span><sub className="text-red-400">k</sub>
              </p>
              <p>Donde:</p>
              <ul className="ml-4 space-y-1">
                <li><span className="text-pink-400">Y</span><sub className="text-pink-400">k</sub>: Resultados predichos para observaciones del cluster k</li>
                <li><span className="text-blue-300">X</span><sub className="text-blue-300">gasto</sub>: Importe gastado (BOB)</li>
                <li><span className="text-blue-300">X</span><sub className="text-blue-300">region</sub>: Variable Dummy para la Región</li>
                <li><span className="text-green-300">β</span><sub className="text-green-300">0k</sub>, <span className="text-green-300">β</span><sub className="text-green-300">1k</sub>, <span className="text-green-300">β</span><sub className="text-green-300">2k</sub>: Parámetros específicos del cluster k</li>
                <li><span className="text-red-400">ε</span><sub className="text-red-400">k</sub>: Término de error ~ N(0, σ²)</li>
              </ul>
            </div>
          </Card>


        <h2 className="text-3xl font-extrabold text-gray-800 border-b border-gray-300 pb-2 mb-6 mt-12">
          Uso de las Técnicas Competidoras
        </h2>

            {/* SECCIÓN 3: Uso de Técnicas Competidoras (Naranja) */}
            <Card 
              title="Técnicas Competidoras" 
              icon="⚖️" 
              colorClass="#f97316" 
            >
              <p className="text-sm mb-3">Se comparará el modelo híbrido principal contra las siguientes técnicas de referencia para validar su superioridad:</p>
              <ul className="space-y-2">
                <li className="p-3 bg-gray-100 rounded-lg border-l-4 border-orange-500">
                  <span className="font-medium text-gray-700">Regresión Lineal Simple:</span> <span className="text-sm text-gray-500">(Baseline)</span>
                </li>
                <li className="p-3 bg-gray-100 rounded-lg border-l-4 border-orange-500">
                  <span className="font-medium text-gray-700">Random Forest:</span> <span className="text-sm text-gray-500">(Alternativa compleja)</span>
                </li>
                <li className="p-3 bg-gray-100 rounded-lg border-l-4 border-orange-500">
                  <span className="font-medium text-gray-700">Modelo Híbrido:</span> <span className="text-sm text-gray-500">(Propuesta principal)</span>
                </li>
              </ul>
            </Card>

        <div className="space-y-8 mb-12">
            {/* GRÁFICO 1: Comparación de Modelos (RMSE) */}
            <ChartPlaceholder 
                title="Gráfico 4: USO DE TÉCNICAS COMPETIDORAS:"
                // Placeholder temporal de 1200x500
                imageUrl="../img/img4.png" 
            />

            {/* INTERPRETACIÓN 2 */}
            <InterpretationSection 
                title="El modelo híbrido supera drásticamente a las técnicas tradicionales, reduciendo el error (RMSE) en más del 80% comparado con la regresión lineal simple." 
            />
        </div>





        <h2 className="text-3xl font-extrabold text-gray-800 border-b border-gray-300 pb-2 mb-6 mt-12">
          Comparación en Términos de un Criterio Preciso
        </h2>

        <div className="space-y-8 mb-12">
            {/* GRÁFICO 1: Comparación de Modelos (RMSE) */}
            <ChartPlaceholder 
                title="Gráfico 5: COMPARACIÓN EN TÉRMINOS DE CRITERIO PRECISO"
                // Placeholder temporal de 1200x500
                imageUrl="../img/img5.png" 
            />
            <InterpretationSection 
                title="El modelo híbrido es 5.5 veces más preciso que la regresión lineal y 6.4 veces mejor que Random Forest, validando su superioridad predictiva." 
            />

            <ChartPlaceholder 
                title="Gráfico 5: COMPARACIÓN EN TÉRMINOS DE CRITERIO PRECISO"
                // Placeholder temporal de 1200x500
                imageUrl="../img/img6.png" 
            />
            <InterpretationSection 
                title="Visualmente evidente: el modelo híbrido reduce drásticamente el error de predicción, con un RMSE significativamente inferior al de los métodos tradicionales." 
            />
        </div>

                  <Card 
            title="Resultados y Recomendación" 
            icon="🏆" 
            colorClass="#f59e0b" // Color Amarillo/Naranja para destacar los resultados
          >
            <h4 className="font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-2">COMPARACIÓN DE RMSE:</h4>
            
            {/* Bloque para las métricas */}
            <div className="space-y-3">
              {/* Regresión Lineal (Baseline) */}
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-600">Regresión Lineal (Baseline)</span>
                <span className="text-sm font-bold text-red-600">RMSE = 16701.45</span>
              </div>
              {/* Random Forest */}
              <div className="p-2 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-600">Random Forest</span>
                  <span className="text-sm font-bold text-red-600">RMSE = 19632.37</span>
                </div>
                <p className="text-xs text-red-500 italic ml-4">Mejora: -17.5% (Peor que Baseline)</p>
              </div>
              {/* Modelo Híbrido (Winner) */}
              <div className="p-3 bg-green-100 rounded-lg border border-green-300 shadow-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-green-700">Modelo Híbrido</span>
                  <span className="text-sm font-extrabold text-green-800">RMSE = 3060.50</span>
                </div>
                <p className="text-xs font-semibold text-green-600 ml-4">Mejora del 81.7%</p>
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-700 mt-4 border-t border-gray-200 pt-2">TÉCNICA RECOMENDADA:</h4>
            <p className="text-sm font-bold text-gray-800">MODELO HÍBRIDO</p>
            
            <h4 className="font-semibold text-gray-700 mt-4">Justificación:</h4>
            <p className="text-sm">Combina la interpretabilidad de regresión con la adaptabilidad del clustering, logrando la mejor métrica de predicción (RMSE más bajo).</p>
          </Card>

        <h2 className="text-3xl font-extrabold text-gray-800 border-b border-gray-300 pb-2 mb-6 mt-12">
          Optimización en Términos de Criterio Preciso o Inadecuado
        </h2>

                    <Card 
              title="Optimización y Evaluación Final" 
              icon="🔧" 
              colorClass="#06b6d4" // Color Azul/Cian para destacar la ingeniería
            >
              <h4 className="font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-2">ANÁLISIS DE CLUSTERS IDENTIFICADOS:</h4>
              
              {/* Tablas de Clusters */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-700">
                {/* Columna 1: Métricas Numéricas */}
                <div className="bg-gray-50 p-2 rounded-lg border">
                  <p className="font-bold mb-1 border-b">Cluster (Métricas)</p>
                  <p className="grid grid-cols-5 font-semibold text-gray-500 border-b mb-1">
                    <span>C</span><span>Gasto</span><span>Ef.</span><span>CPM</span><span>Alcance</span>
                  </p>
                  <p className="grid grid-cols-5"><span>0</span><span>10.31</span><span>15.44</span><span>1.15</span><span>6901</span></p>
                  <p className="grid grid-cols-5"><span>1</span><span>5.59</span><span>2216</span><span>0.45</span><span>9819</span></p>
                  <p className="grid grid-cols-5"><span>2</span><span>78.26</span><span>824</span><span>0.83</span><span>70714</span></p>
                </div>
                
                {/* Columna 2: Interpretación Categórica */}
                <div className="bg-gray-50 p-2 rounded-lg border">
                  <p className="font-bold mb-1 border-b">Cluster (Mercado)</p>
                  <p className="grid grid-cols-2 font-semibold text-gray-500 border-b mb-1">
                    <span>Región</span><span>Tipo_Mercado</span>
                  </p>
                  <p className="grid grid-cols-2"><span>Cochabamba</span><span>Alta Competencia</span></p>
                  <p className="grid grid-cols-2"><span>Cochabamba</span><span>Oportunidad</span></p>
                  <p className="grid grid-cols-2"><span>Cochabamba</span><span>Nicho</span></p>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-700 mt-4 border-t border-gray-200 pt-2">OPTIMIZACIÓN DE PARÁMETROS:</h4>
              <div className="text-xs space-y-1 bg-gray-100 p-3 rounded-lg">
                <p>Búsqueda de K óptimo (Inercia):</p>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>K=2: 205.49</p><p>K=3: 118.78 (Seleccionado)</p>
                  <p>K=4: 67.66</p><p>K=5: 42.76</p>
                </div>
                <p className="text-sm font-bold text-green-700 mt-2">✅ Número óptimo de clusters seleccionado: 3</p>
              </div>

              <h4 className="font-semibold text-gray-700 mt-4 border-t border-gray-200 pt-2">MEJORA FINAL DEL MODELO:</h4>
              <div className="bg-blue-100 p-3 rounded-lg border border-blue-300 shadow-md text-sm">
                  <div className="flex justify-between mb-1">
                      <span>RMSE antes de optimización:</span>
                      <span className="font-medium">3060.50</span>
                  </div>
                  <div className="flex justify-between font-bold text-blue-800">
                      <span>RMSE después de optimización:</span>
                      <span>2786.21</span>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mt-1 text-right">📈 MEJORA TOTAL: 9.0%</p>
              </div>

              <h4 className="font-semibold text-gray-700 mt-4 border-t border-gray-200 pt-2">EVALUACIÓN DE CRITERIOS INADECUADOS:</h4>
              <ul className="list-none space-y-1 text-sm">
                <li className="flex justify-between border-b border-dotted pb-1"><span>1. INTERPRETABILIDAD:</span> <span className="font-semibold text-green-600">Alta</span></li>
                <li className="flex justify-between border-b border-dotted pb-1"><span>2. ESCALABILIDAD:</span> <span className="font-semibold text-yellow-600">Media</span></li>
                <li className="flex justify-between border-b border-dotted pb-1"><span>3. TIEMPO CÓMPUTO:</span> <span className="font-semibold text-green-600">Bajo</span></li>
                <li className="flex justify-between"><span>4. FACILIDAD IMPLEMENTACIÓN:</span> <span className="font-semibold text-yellow-600">Media-Alta</span></li>
              </ul>
            </Card>

                       <Card 
              title="Conclusiones y Resumen Final" 
              icon="🏁" 
              colorClass="#22c55e" // Verde brillante para el logro
            >
                <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">LOGROS PRINCIPALES DEL SPRINT:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Problema definido cuantitativamente con métricas SMART.</li>
                    <li>Técnica híbrida justificada e implementada.</li>
                    <li>Tres técnicas competidoras evaluadas comparativamente.</li>
                    <li>Modelo híbrido demostró superioridad (menor RMSE).</li>
                    <li>Optimización logró mejora del 5.2% en precisión.</li>
                </ul>

                <h4 className="font-semibold text-gray-800 mt-4 border-t border-gray-200 pt-2">RESULTADOS FINALES CLAVE:</h4>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between font-bold text-gray-700">
                        <span>• Mejor técnica:</span>
                        <span className="text-green-700">Modelo Híbrido</span>
                    </div>
                    <div className="flex justify-between">
                        <span>• RMSE alcanzado:</span>
                        <span className="font-medium text-green-700">2786.21</span>
                    </div>
                    <div className="flex justify-between">
                        <span>• Clusters identificados:</span>
                        <span className="font-medium">3 tipos de mercado</span>
                    </div>
                    <div className="flex justify-between">
                        <span>• Interpretabilidad:</span>
                        <span className="font-medium">Alta</span>
                    </div>
                </div>
            </Card>




      </div>

      {/* Pie de página simple */}
      <footer 
        className="mt-12 pt-6 text-center text-sm border-t border-gray-300"
        style={{ color: SECONDARY_COLOR }}
      >
        Dashboard Analítico - Sprint 1 - 2024
      </footer>
    </div>
  );
};

export default App;