import * as React from "react";
import {Container, Rev, Box, Button} from './styles'

export default function App () {
  return (
    <Container className="container">
      <Rev className="review">
        <h3>Add your review</h3>

        <Box className="box">
          <form action="">
            <label htmlFor="">Add feedback</label> <br />
            <textarea name="" id="" cols={40} rows={10}></textarea>

            <Button className="btn">
              <button type="submit">Submit</button>
              <button type="reset">Cancel</button>
            </Button>
          </form>
        </Box>
      </Rev>
    </Container>
  );
};
