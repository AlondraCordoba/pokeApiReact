import axios from 'axios';
import React, { Component }  from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { CircularProgress, Tooltip } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles';
import './App.css';
import { SearchProvider, SearchConsumer, Result } from './components/context/contextSearch';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
            color: "black",
            backgroundColor: "white",
            fontFamily: 'Poppins',
            borderRadius: '5px',
            border: 'solid #0097DC 5px',
        }
      }
    }
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <div className='center-b'>
  <SearchProvider>
    <SearchConsumer/>
    <App/>
  </SearchProvider>
</div>

function App(props) {
  const info = Result();
  const [pokemon, setPokemon] = useState([]);   
  const [pokemonInfo, setPokemonInfo] = useState([]);   
  const [array, setArray] = useState([]);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(10); 
  const [shiny, setShiny] = useState(false);
  const [side, setSide] = useState(false);
  const message = useRef(null);

  useEffect(() => {    
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`).then(data => {      
      setPokemonInfo(data.data.results);                             
    });        
  }, []);

  useEffect(() => {
    if(pokemonInfo.length > 0){
      pokemonInfo.slice(numberOne, numberTwo).filter((elemento) => {
        if(elemento.name.toString().toLowerCase().includes(info.search)){
          setArray([]);
          const url = elemento.url.split('/');
          axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(data => {
            setArray((current) => [...current, {data: data.data}]);            
          });
        }
      });    
    }
  }, [info]);

  useEffect(() => {
    pokeChange();
  }, [pokemonInfo]);

  const pokeChange = () => {
    if(pokemonInfo.length === 1126){
      var position = pokemonInfo.slice(numberOne, numberTwo);
      position.map(m => {
        const url = m.url.split('/');
        axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(poke => {   
          setArray((current) => [...current, {data: poke.data}]);          
        }).catch(function (e) {
          console.log(e.message);
        });
      });
    }
  }

  useEffect(() => {
    if(array.length === 10){
      setPokemon(array);
    }    
  }, [array]);

  useEffect(() => {    
    if(numberOne > 1115){
      setNumberOne(0);
      setNumberTwo(10);
    }
    if(numberOne < 0){
      setNumberOne(1115);
      setNumberTwo(1125);
    }
  }, [numberOne]);

  useEffect(() => {   
    setArray([]);     
    pokemonInfo.slice(numberOne, numberTwo).map(info => {
      const url = info.url.split('/');      
      axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(poke => {      
        setArray((current) => [...current, {data: poke.data}]);       
      }).catch(function (e) {
        console.log(e.message);
      });
      setPokemon(array);     
    });            
  }, [numberOne]);

  const handleChange = () => {
    window.alert(message.current.className);
  }


  return(
    <div>
        {
          array.length > 0 && (
            <div className='container-one center-a'>
              <div>
                <div class="cards-list center-a-poke">
                  <TransitionGroup component="ul">
                    {
                      array.slice(0, 10).map((info, index) => (
                        <ThemeProvider key={index} theme={theme}>
                            <img onClick={(e) => {window.location.href = `/pokemons/${info.data.id}`}} className='img-pokemon' src={side === true ? info.data.sprites.back_default ? shiny === true ? info.data.sprites.back_shiny : info.data.sprites.back_default : 'https://c.tenor.com/JKPJy9fQiAAAAAAi/cat-diragana.gif' : info.data.sprites.front_default ? shiny === true ? info.data.sprites.front_shiny : info.data.sprites.front_default : 'https://c.tenor.com/JKPJy9fQiAAAAAAi/cat-diragana.gif'} alt="" width={100} height={100}></img>                            
                        </ThemeProvider>
                      ))
                    }
                  </TransitionGroup>
                </div>
                <div className='center-a'>
                  <button className='btn-left' onClick={(e) => { setNumberOne(numberOne - 10); setNumberTwo(numberTwo - 10); }}></button>
                  <button className='btn-right' onClick={(e) => { setNumberOne(numberOne + 10); setNumberTwo(numberTwo + 10); }}></button>
                </div>
{/*               <div className='center-a'>
                  <button className='golden' onClick={(e) => { setShiny(!shiny) }}></button>
                  <button className='change' onClick={(e) => { setSide(!side) }}></button>
                  </div>*/}
                <div className='center-a'>
                </div>
              </div>
            </div>      
          )
        }             
    </div>    
  )
}