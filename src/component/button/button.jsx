import { Button } from "react-bootstrap";

export const CustomButton = ({ color, value, type,icons }) => {
  return (
  <Button variant={color} type={type}>
       {icons} {value}
      </Button>
  );
};
