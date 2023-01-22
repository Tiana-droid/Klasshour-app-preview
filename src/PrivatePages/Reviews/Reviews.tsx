import * as React from "react";
import {Container, Rev, Box, Button,FormControl} from './styles'
import Rating from "../../Components/Rating";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import StudentOBJ from "../../classes/student.class";

export default function App() {
  const [rating, setRating] = React.useState(0)
  const [title, setTitle] = React.useState("")
  const [isLoading,setIsLoading] = React.useState(false)
  const [description, setDescription] = React.useState("")
  const navigate = useNavigate()
 let [searchParams,setSearchParams] = useSearchParams();
  const setRate = (rate: React.SetStateAction<number>) => {
    setRating(rate);
  };
  
  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };
  const handleReview = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (!rating || !title || !description) {
      toast.error("All Fields are required")
      return
    }
    const payload = {
      rating,
    }  
    StudentOBJ.student_review_tutor(payload).then((res: any) => {
      if (res?.status === true) {
            toast.success(res?.message);
            setIsLoading(false);
            goto("/timeline");
          } else {
            toast.error(res?.message);
            setIsLoading(false);
          }
    })
  }
  if (searchParams.get('role') === "participant") {
    return (
    <Container className="container">
      <Rev className="review">
        <h3>Add your review</h3>

        <Box className="box">
          <form onSubmit={handleReview}>
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
  }
  return (
    <Container className="container">
      <Rev className="review">
        <h3>Add your review</h3>

        <Box className="box">
          <form onSubmit={handleReview}>
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
