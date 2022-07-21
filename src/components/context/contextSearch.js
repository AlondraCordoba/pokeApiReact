import React, { useContext, useEffect } from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    textField: {
      height: "35px",
      marginTop: "8px",
      alignContent: "left",
      textAlign: "left",
      width: 'auto',
      '& .MuiOutlinedInput-root, & .MuiInputBase-root': {
        width: '95%',
        fontFamily: 'Poppins',
        borderRadius: "10px",
        background: "rgba(251, 252, 251, 0.808)",
        boxShadow: "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
        color: "#353535",
        padding: '0 3px',        
      },
      '& .Mui-focused': {
        borderColor: "#00B1FF"
      },
      '& .MuiInput-root.Mui-error': {
        borderColor: '#FF2F54',
        color: '#FF2F54',
        '&:focus, &:hover, &:focus-visible, &:active': {
          borderColor: '#FF2F54',
        },
      },
      '& .MuiOutlinedInput-root.Mui-disabled, & .MuiInputBase-root.Mui-disabled': {
        borderColor: '#F5F5F5',
        backgroundColor: '#F5F5F5',
        color: '#BEBEBE',
        '&:focus, &:hover, &:focus-visible, &:active': {
          borderColor: '#F5F5F5',
        },
      },
      '& .MuiFormHelperText-root.Mui-error': {
        color: '#FF2F54',
      },
      '& .MuiInput-underline': {
        '&:before, &:after, &:focus, &:hover, &:focus-visible': {
          borderColor: 'transparent',
        },
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderColor: 'transparent'
      },
      '& ::-webkit-calendar-picker-indicator': {
        filter: 'invert(51%) sepia(85%) saturate(2108%) hue-rotate(166deg) brightness(101%) contrast(102%)'
      },
      '& .MuiInput-inputMultiline': {
        padding: '5px 3px',
      }
    },
  }))

const ContextSearch = React.createContext({
    search: "",
    setSearch: () => {}, 
});

export function SearchProvider(props) {
    const [search, setSearch] = useState("Hola");
    const result = React.useMemo(() => ({
        search, setSearch
    }), [search]);

    return (
        <ContextSearch.Provider value={result} {...props} />
    )
}

export function SearchConsumer(props) {
    const classes = useStyles(props);
    const { search, setSearch } = useContext(ContextSearch);
    return(
        <div className="center-a" style={{paddingTop: '100px'}}>
          <TextField className={classes.textField} type="text" onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

export function Result() {
    const datos = useContext(ContextSearch);
    return datos;
}