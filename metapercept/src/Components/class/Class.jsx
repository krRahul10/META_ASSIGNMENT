import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./class.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Class = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/data", {
        method: "GET",
        "Content-Type": "application/json",
      });

      const data = await res.json();

      if (data) {
        setData(data);
      }
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main_div_class">
      <h3>Class</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia,
        tempora vitae accusamus, ad eveniet nemo in mollitia, debitis molestias
        odit!
      </p>
      <div className="main_data_div">
        {data.map((el, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
             <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{el.ID}</Card.Title>
                <Card.Text >
                 {el.ShortDesc}
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Class;
