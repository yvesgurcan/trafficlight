import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

/*
  traffic light: one light turned on at the time
*/

const GRAY = 'gray';

const LIGHTS = [
    'green',
    'yellow',
    'red',
    'purple',
    'brown',
    'cyan',
    'magenta',
    'navy'
];

const Light = styled.div`
    background: ${props => props.color || GRAY};
    cursor: pointer;
`;

export default function App() {
    const [trafficLight, setTrafficLight] = useState(null);
    return (
        <Fragment>
            {LIGHTS.map(color => (
                <Light
                    key={color}
                    color={trafficLight === color ? color : undefined}
                    onClick={() => setTrafficLight(color)}
                >
                    {color}
                </Light>
            ))}
        </Fragment>
    );
}
