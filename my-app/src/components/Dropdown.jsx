import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function DropApp() {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <div className="container pt-5">
      <DropdownButton
        size="lg"
        title="Dropdown &nbsp;"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Maharashtra">Maharashtra</Dropdown.Item>
        <Dropdown.Item eventKey="Uttar Pradesh">Uttar Pradesh</Dropdown.Item>
        <Dropdown.Item eventKey="Kolkata">Kolkata</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="Other's">Other's</Dropdown.Item>
      </DropdownButton>
      <p className="pt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos provident
        neque deserunt, iure laborum a fuga et. Provident assumenda voluptates
        asperiores ipsum nesciunt amet dolorem quidem deserunt aut? Molestias ad
        perferendis, aspernatur odit alias quia unde, aliquam similique magni
        deserunt voluptas, iure ex nemo asperiores reprehenderit? Itaque vitae
        perspiciatis, modi harum excepturi cum quo quam enim ipsum error
        provident aspernatur natus aperiam vel quibusdam recusandae ex quidem
        facilis, repellendus impedit saepe? Ratione, sit consequatur qui dolore
        similique voluptate ducimus quisquam libero et nulla, velit blanditiis
        expedita eaque excepturi porro, exercitationem quo iusto illum! Magni
        labore quo illum ut voluptatum, autem nihil error accusantium, delectus
        dolorem aliquam distinctio ea. Sit aliquid molestiae ad reiciendis qui
        quasi consequatur atque nam, officiis, odit est quis, quam porro quia
        vero ea delectus! Dolorum nihil inventore sapiente recusandae obcaecati
        harum blanditiis explicabo, sint natus consequatur necessitatibus iusto
        perspiciatis minus molestiae maiores optio tenetur aspernatur magnam
        perferendis quaerat atque. Neque quaerat laudantium mollitia quis error
        vero quibusdam reprehenderit, maxime beatae unde eum, sit id consectetur
        impedit temporibus illo vel veniam quidem dolore labore quasi. Ullam
        recusandae dignissimos, architecto rem expedita mollitia excepturi illo
        nemo eveniet corporis porro neque quibusdam iste vero voluptas ipsam,
        officia reprehenderit at.
      </p>
      <h3 className="pt-5">You selected {value}</h3>
    </div>
  );
}

export default DropApp;
