import { Alert, Button, Card } from "react-bootstrap";

function BootstrapComponent() {
  const variantAlerts = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  return (
    <div>
      <Button variant="primary">Primary</Button>
      {variantAlerts.map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.shutterstock.com/shutterstock/photos/2747230323/display_1500/stock-photo-the-incredible-hulk-smashing-the-ground-2747230323.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BootstrapComponent;
