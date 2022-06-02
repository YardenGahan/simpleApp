import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";

const AddPoll = ({ onAdd }) => {
    // first_name, last_name, date_field, city, covid, other, other_field
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [date_field, setDateField] = useState("");
  const [city, setCity] = useState("");
  const [covid, setCovid] = useState("");
  const [other, setOther] = useState("");
  const [other_field, setOtherField] = useState("");
  const [pollId, setPollId] = useState(null);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    refreshPolls();
  }, []);

  const refreshPolls = () => {
    API.get("/")
      .then((res) => {
        setPolls(res.data);
        console.log(res)
        // setName(res[0].name)
        // setGenre(res[0].genre)
        // setStarring(res[0].starring)
        // setPollId(res[0].id)
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { first_name, last_name, date_field, city, covid, other, other_field };
    API.post("/", item).then(() => refreshPolls());
  };

  const onUpdate = (id) => {
    let item = { first_name };
    API.patch(`/${id}/`, item).then((res) => refreshPolls());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshPolls());
  };

  function selectPoll(id) {
    let item = polls.filter((poll) => poll.id === id)[0];
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setDateField(item.date_field);
    setCity(item.city)
    setCovid(item.covid);
    setPollId(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new Poll</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{pollId} First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Birth date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date of Birth"
                value={date_field}
                onChange={(e) => setDateField(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(pollId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date</th>
                <th scope="col">City </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {polls.map((poll, index) => {
                return (
                  <tr key="">
                    <th scope="row">{poll.id}</th>
                    <td> {poll.first_name}</td>
                    <td>{poll.last_name}</td>
                    <td>{poll.date_field}</td>
                    <td>{poll.city}</td>
                    <td>
                      <i
                        className="fa fa-pencil-square text-primary d-inline"
                        aria-hidden="true"
                        onClick={() => selectPoll(poll.id)}
                      ></i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(poll.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddPoll;