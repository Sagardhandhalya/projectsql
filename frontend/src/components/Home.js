import { Link } from 'react-router-dom'
import PersonCard from './PersonCard'
function Home() {
    return (
        <div>

            <PersonCard/>


            <Link className="absolute bg-blue-900 bottom-8 right-8 font-bold pb-3 px-4 text-6xl rounded-full  flex justify-center  " to="/add" >+</Link>
            
        </div>
    )
}

export default Home
