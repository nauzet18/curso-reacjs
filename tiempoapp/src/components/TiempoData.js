import React from 'react'
import TiempoExtraInfo from './TiempoExtraInfo'
import TiempoTemperatura from './TiempoTemperatura'
import './style.css'

const TiempoData = () => (
    <div className="tiempoDataCont">
        <TiempoTemperatura temp={24.4} state={'cloudy'}></TiempoTemperatura>
        <TiempoExtraInfo humedad={80} viento={'50 km/h'}></TiempoExtraInfo>
    </div>
)

export default TiempoData;