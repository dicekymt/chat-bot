import * as React from 'react';
import Button from '@mui/material/Button';



const Answer = (props) => {
  return ( 
    <Button variant="outlined" onClick={() => props.select(props.content, props.nextId)}
      sx={{
        borderColor: "#FFB549",
        color: "#FFB549",
        fontWeight: 600,
        marginBottom: "8px",
        "&:hover": {
          backgroundColor: "#FFB549",
          borderColor: "#FFB549",
          color:"#fff"
        }
      }}
    >
      {props.content}
    </Button>
  ) 
}
export default Answer
