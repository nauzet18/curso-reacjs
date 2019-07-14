import React from 'react'

const TiempoExtraInfo = ({humedad,viento}) => (
    
    <div>
        <span>
            {`${humedad} % - `}
        </span>
        <span>
            {`${viento} viento`}
        </span>
        
    </div>    
)

export default TiempoExtraInfo;
