import * as React from "react";
import {Container, Rev, Box, Button,FormControl} from './styles'
import Rating from "../../Components/Rating";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function App() {
  const [rating, setRating] = React.useState(0)
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const navigate = useNavigate()
 let searchParams = useSearchParams();
  const setRate = (rate: React.SetStateAction<number>) => {
    setRating(rate);
  };
  console.log(searchParams)
  const handleReview = () => {
    if (!rating || !title || !description) {
      toast.error("All Fields are required")
    }
    const payload = {
      rating,
   }  
 }
  return (
    <Container className="container">
      <Rev className="review">
        <h3>Add your review</h3>

        <Box className="box">
          <form action="">
            <FormControl>
              <label htmlFor="">Title</label> <br />
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </FormControl>

            <FormControl>
               <label htmlFor="">Description</label> <br />
            <textarea name="" id="" cols={40} rows={10} value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            </FormControl>
            <Rating count={setRate} />
            <Button className="btn">
              <button type="submit">Submit</button>
              <button type="reset" onClick={()=>navigate('/')}>Cancel</button>
            </Button>
          </form>
        </Box>
      </Rev>
    </Container>
  );
};
