import { Link } from 'react-router-dom'
import PersonCard from './PersonCard'
import axios from 'axios'
// import avatar from './../assets/avatar.png'
import {useEffect,useState} from 'react'
function Home() {

    const [profiles, setProfiles] = useState([])

useEffect(() => {
    
  axios.get('http://localhost:7000/get-all-profiles').then((res)=>
  {
      console.log(res);
      return res.data
  }
 
  ).then(data => {
     console.log(data);
     
     setProfiles(data)
      
        
  }).catch(()=>{

  })

    
}, []);
    
    return (
        <div>

            {
                 profiles.map((user) => { return <PersonCard key={user.id} user = {user}/>} )
            }

            
            <Link className="fixed bg-pink-700 bottom-8 right-8 
             pb-2 px-4 text-6xl rounded-full
            flex justify-center" to="/add" >+</Link>
        </div>
    )
}
export default Home
