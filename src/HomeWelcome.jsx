import { Link } from 'react-router-dom';
import kortele from './kortele.jpg'


const HomeWelcome = () => {
  return (
  
    <div className="create">
      <img src={kortele} alt="kortele" />
      <h2>Give something that Means Something</h2>
      <p>Give blood and give the gift of life. Come to give blood Dec. 1-17 and get a Donor card</p>
      <Link to="/create">
        <button className='home-button'>Make an appointment</button>
      </Link>
    </div>
  );
}

export default HomeWelcome;
