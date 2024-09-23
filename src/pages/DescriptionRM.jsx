import { useState } from "react";
import { useStore } from 'zustand';
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { Card } from 'antd';
import { useContextRM } from '../hooks/useContextRM';

export const DescriptionRM = () => {
    const { Meta } = Card;
    const params = useParams();
    console.log('Parametros - ID:' , params)

    const { characterContext } = useStore(useContextRM);
    console.log('Character:' ,characterContext);


    const infoPersonaje = characterContext.find((parametro) => parametro.id == params?.id);
    console.log('InfoPersonaje', infoPersonaje); 

    return(
        <>
        <h1>Detalles de Rick And Morty</h1>
        <Card
    hoverable
    key={infoPersonaje.id}  //Este onclick permite enrutar por medio del ID
    style={{
        width: 240,
    }}
    cover={<img alt="rick_and_morty" src={infoPersonaje.image} />}
  >
    <Meta title={infoPersonaje?.name} description={infoPersonaje.status} />
  </Card>
        </>
    )
}