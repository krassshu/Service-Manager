'use client'

import { Circle } from "@uiw/react-color";
import { useState } from "react";

export default function SelectEventColor() {
    const [hex, setHex] = useState('#FF5733');  // Start with a vibrant orange
    return (
        <Circle
            colors={[
                '#FF5733',  // Vibrant Orange
                '#33FF57',  // Bright Green
                '#3357FF',  // Strong Blue
                '#FF33A1',  // Hot Pink
                '#FFD700',  // Gold
                '#8A2BE2',  // BlueViolet
                '#00CED1',  // Dark Turquoise
                '#FF4500',  // OrangeRed
                '#2E8B57',  // SeaGreen
                '#DA70D6',  // Orchid
            ]}
            pointProps={{
                style:{
                    width:18,
                    height:18,
                    borderRadius:"100%"
                }
            }}
            color={hex}
            onChange={(color) => {
                setHex(color.hex);
            }}
        />
    );
}
