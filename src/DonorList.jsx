import { Link } from 'react-router-dom';

const DonorList = ({ donors }) => {
  return (
    <div className="donor-list">
      {donors.map(donor => (
        <div className="donor-preview" key={donor.id} >
          <Link to={`/donors/${donor.id}`}>
            <figure><img src={ donor.image } alt="image" /></figure>
            <h2>{ donor.firstName }</h2>
            <h2>{ donor.lastName }</h2>
            <p>Blood group: { donor.bloodGroup }</p>

        
            
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default DonorList;