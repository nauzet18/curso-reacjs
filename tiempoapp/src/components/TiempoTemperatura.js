import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

const icons = {
    sunny: 'day-sunny',
    cloudy: 'day-cloudy-high',
}

const tempIcon = state => {
    return <WeatherIcons name={icons[state]} size="2x" ></WeatherIcons>
}

const TiempoTemperatura = ({temp, state}) => (
    <div>
        {
            tempIcon(state)
        }
        <span>{ `${temp} Cº`}</span>
    </div>
)
TiempoTemperatura.propTypes = {
    temp: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
}
export default TiempoTemperatura;