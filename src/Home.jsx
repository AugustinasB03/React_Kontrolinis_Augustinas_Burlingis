import DonorList from "./DonorList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: donors } = useFetch('http://localhost:8000/donors')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { donors && <DonorList donors={donors} /> }
    </div>
  );
}
 
export default Home;
