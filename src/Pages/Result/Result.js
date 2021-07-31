import { Button, colors } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import"./Result.css";

const Result = ({name,score}) => {
    const history = useHistory();
    useEffect(() => {
        if(!name){
           history.push("/");
        }
      
    }, [name,history])
    return (
        <div className="result">
            <span className="title">Congratulations Your FinalScore is :{score} </span>
            <Button
            variant="contained"
            color="primary"
            size="large"
            style={{alignItems:"center",marginTop:20}}
            href="/">Back to Home</Button>
        </div>
    )
}

export default Result;
