import React from 'react'
import TiempoExtraInfo from './TiempoExtraInfo'
import TiempoTemperatura from './TiempoTemperatura'

const TiempoData = () => (
    <div>
        <TiempoTemperatura></TiempoTemperatura>
        <TiempoExtraInfo humedad={80} viento={'50 km/h'}></TiempoExtraInfo>
    </div>
)

export default TiempoData;