import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [prefferedName, setPrefferedName] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('Mr');
  const [bloodGroup, setBloodGroup] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const donor = { firstName, lastName, middleName, prefferedName, date, gender, bloodGroup };

    fetch('http://localhost:8000/donors/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donor)
    }).then(() => {
      
      navigate.push('/');
    })
  }

  return (
    <div className="create">
      <h1>Register a decision to donate</h1>
      <h2>Use this form to record a decision todonate some or all of your organs and tissue. Fields marked * are mandatory</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <select
        value={gender} 
        onChange={(e) => setGender(e.target.value)}>
          <option value="Mr">Mr</option>
          <option value="Mr's">Mr's</option>
        </select>
        <label>First name *</label>
        <input
          value={firstName}
          type="text" 
          required 
          onChange={(e) => setFirstName(e.target.value)}
        >
        </input>
        <label>Last name *</label>
        <input
          value={lastName}
          type="text" 
          required 
          onChange={(e) => setLastName(e.target.value)}
        >
        </input>
        <label>Blood group *</label>
        <input
          value={bloodGroup}
          type="text" 
          required 
          onChange={(e) => setBloodGroup(e.target.value)}
        >
        </input>
        <label>Middle name</label>
        <input
          value={middleName}
          type="text" 
          onChange={(e) => setMiddleName(e.target.value)}
        >
        </input>
        <label>Preferred name</label>
        <input
          value={prefferedName}
          type="text" 
          onChange={(e) => setPrefferedName(e.target.value)}
        >
        </input>
        <label>Date of birth *</label>
        <input
          value={date}
          type="date" 
          required 
          onChange={(e) => setDate(e.target.value)}
        >
        </input>
        <button>Submit form</button>
      </form>
    </div>
  );
}
 
export default Create;