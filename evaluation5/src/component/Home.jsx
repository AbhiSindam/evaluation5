import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
export const Home = () => {
  return (
    <>
      <div>Home</div>
      <>
        <Card border='primary' style={{ width: "18rem",display: "flex" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Text>Discription</Card.Text>
            <Button variant='primary'>Add</Button>
          </Card.Body>
        </Card>
        <Card border='primary' style={{ width: "18rem",display: "flex" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Text>Discription</Card.Text>
            <Button variant='primary'>Add</Button>
          </Card.Body>
        </Card>
      </>
    </>
  );
};
