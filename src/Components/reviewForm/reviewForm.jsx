import {Form,Button} from "react-bootstrap"

const ReviewForm = ({labelText,handleSubmit,revText,defaultVaue})=>{
    return(
        <Form>
            <Form.Group className="mb3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultVaue}></Form.Control>
            </Form.Group>
            <Button variant="outline-info" onClick={{handleSubmit}}>Submit</Button>
        </Form>
    )
}

export default ReviewForm