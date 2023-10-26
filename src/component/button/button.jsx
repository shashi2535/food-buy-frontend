import { Button } from "react-bootstrap";

export const CustomButton = ({ color, value, type }) => {
  return (
    <div className="mb-3" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Button variant={color} type={type} style={{width:"60%"}}>
        {value}
      </Button>
    </div>
  );
};
