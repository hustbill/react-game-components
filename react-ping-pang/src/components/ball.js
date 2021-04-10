import {useEffect, } from 'react';

export default ball = () => {
    useEffect(() => {
        color = props.color; 
        size = props.size; 
        direction = props.direction;
        speed = props.speed;

        return () => {
            console.log('cleanup');
        }
    }, [])
}