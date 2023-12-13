import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';


const DonorDetails = () => {
  const { id } = useParams();
  const { data: donor, error, isPending } = useFetch('https://dummyjson.com/users/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('https://dummyjson.com/users/' + donor.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/list');
    }) 
  }

  return (
    <div className="donor-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { donor && (
        <article>
          <figure><img src={ donor.image } alt="image" /></figure>
          <h2>Gender: { donor.gender }</h2>
          <h2>Blood group: { donor.bloodGroup }</h2>
          <h2>First name: { donor.firstName }</h2>
          <h2>Last name: { donor.lastName }</h2>
          <h2>Middle name: { donor.middleName }</h2>
          <h2>Preffered  name: { donor.prefferedName }</h2>
          <h2>Date of birth: { donor.date }</h2>
          
          
          <button onClick={handleClick}>delete</button>
          <Link to={`/donors/${id}/edit`}><button>Edit</button></Link>
        </article>
      )}
    </div>
  );
}
 
export default DonorDetails;