import * as React from "react";
import { Container, Rev, Box, Button, FormControl } from './styles'
import Rating from "../../Components/Rating";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import StudentOBJ from "../../classes/student.class";
import Spinner from "../../Components/Spinner";
import axios from "axios";


export default function App() {
  const [rating, setRating] = React.useState(0)
  const [title, setTitle] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [description, setDescription] = React.useState("")
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  const setRate = (rate: React.SetStateAction<number>) => {
    setRating(rate);
  };
  React.useEffect(() => {
    if (searchParams.get('role') !== "participant") {
      navigate('/')
    }
  }, [searchParams, navigate])

  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };
  const handleReview = async (e:any ) => {
    e.preventDefault();
    setIsLoading(true)
    if (!rating || !title || !description) {
      toast.error("All Fields are required")
      setIsLoading(false)
      return
    }
    const payload = {
      rating,
      studentId: searchParams.get('userid'),
      title,
      description,
      classid: searchParams.get('classid')

    }
   await axios.post("https://kh-backend.herokuapp.com/KH/api/v1/client/student/review-tutor",payload).then((res: any) => {
      if (res?.data?.status === true) {
        toast.success(res?.data?.message);
        goto('/')

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
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Great tutor"></input>
              </FormControl>

              <FormControl>
                <label htmlFor="">Description</label> <br />
                <textarea name="" id="" cols={40} rows={10} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="I love your way of teaching"></textarea>
              </FormControl>
              <Rating count={setRate} />
              <Button className="btn">
                <button type="submit" disabled={isLoading}>{isLoading ? <Spinner isLoading={isLoading} /> : "Submit"}</button>
                <button type="reset" onClick={() => navigate('/')}>Cancel</button>
              </Button>
            </form>
          </Box>
        </Rev>
      </Container>
    );
  }
  return <>
    Thank you for the class
  </>

};
