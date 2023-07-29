import { Button,  Checkbox, FormControlLabel} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4040/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article><b>By {author}</b></article>
      <h3>{name}</h3>
      <p>{description}</p>
     
        <h3>Ksh. {price}</h3> 
        <FormControlLabel 
            control={
            <Checkbox/> 
            }
            label="done"
            />      
        
    
         <div>
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>Update </Button> 
            <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>Delete </Button>
        </div>          
     
     
       
    </div>
  );
};

export default Book;