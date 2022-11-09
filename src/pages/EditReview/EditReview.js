import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditReview(props) {
  console.log({ props });
  const token = localStorage.getItem("token");
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    fetch(
      `${process.env.REACT_APP_SERVER_BASEURL}/reviews/update-review/${props.review._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description: review,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(`review updated...`, result);
        form.reset();
        props.getReviewByUser();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        props.onHide();
      });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="w-50 w-sm-100">
          <>
            <FloatingLabel controlId="floatingTextarea2" label="Review">
              <Form.Control
                as="textarea"
                name="review"
                defaultValue={props.review.description}
                required
                placeholder="Leave a review here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </>

          <Button
            variant="danger"
            className="border-4 mt-2 border-light me-2"
            type="submit"
          >
            Update Review
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditReview;
