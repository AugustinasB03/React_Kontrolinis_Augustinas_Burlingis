import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditDonor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [prefferedName, setPrefferedName] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('Mr');
  const [bloodGroup, setBloodGroup] = useState('');

  useEffect(() => {
    // Fetch donor data based on the ID
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setMiddleName(data.middleName);
        setPrefferedName(data.prefferedName);
        setDate(data.date);
        setGender(data.gender);
        setBloodGroup(data.bloodGroup);
      })
      .catch((error) => console.error('Error fetching blog data:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDonor = { firstName, lastName, middleName, prefferedName, date, gender, bloodGroup };

    // Update the donor data
    fetch(`https://dummyjson.com/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedDonor),
    })
      .then(() => {
        navigate(`/donors/${id}`);
      })
      .catch((error) => console.error('Error updating blog:', error));
  };

  return (
    <div className="create">
      <h2>Edit Donor</h2>
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
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditDonor;
