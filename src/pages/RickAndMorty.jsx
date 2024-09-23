import axios from "axios"; // Consumir API
import { useEffect, useState } from "react"; // Para consumir API
import { RickAndMortyURL } from '../const.js'; // Para usar constantes como JS.
import { useNavigate } from "react-router-dom";
import '../styles/RickMorty.css' 

import { Space, Table, Tag } from 'antd'; // PARA LA TABLA DE ANTD
import { useStore } from 'zustand';
import { useContextRM } from "../hooks/useContextRM.jsx";

export const RickAndMorty = () => {
    const [character, setCharacter] = useState([]); // UseState para Guardar Personajes
    const navigate = useNavigate(); // Para enrutar
    const [input, setInput] = useState(''); // Para utilizar los valores del INPUT

    // const { characterContext } = useStore(useContext); 
   const {followCharacter} = useStore(useContextRM)
    useEffect(() => {
        axios({ // CONSUMIR API.
            method: 'get',
            url: RickAndMortyURL
        })
        .then(function (response){
            setCharacter(response?.data.results)
            followCharacter(response?.data.results);
            console.log(response?.data.results) 
        })

    }, []);


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          
        },
        {
          title: 'Species',
          dataIndex: 'species',
          key: 'species',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: (status) => (
            <Tag color={status === 'Alive' ? 'green' : status === 'Dead' ? 'volcano' : 'geekblue'}>
              {status ? status.toUpperCase() : 'UNKNOWN'}
            </Tag>
          ),
        },
      ];

      const dataInput = character.filter ((char) => char.name.toUpperCase().includes(input.toUpperCase())
    );
     

    const data = dataInput.map((char) => ({
      key: char.id,
      name: char.name,
      species: char.species,
      gender: char.gender,
      status: char.status,
    }));

    const infoCharacter = (id) => { 
      console.log(id)
      navigate(`/detalles/${id}`);
    }


    return(
        <>
        <h1>Rick And Morty - ¡Again!</h1>

        <input value={input} name="search" placeholder="Ingresa un dato"
        onChange={(e) => setInput(e.target.value)}/>

        <br/><br/><br/>
        <div className="tabla">
        <Table columns={columns} dataSource={data} onRow={(record) => ({
        onClick: () => infoCharacter(record.key)} )}/>
        </div>
        </>
    )

}