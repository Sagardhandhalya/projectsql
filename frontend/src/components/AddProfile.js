import '../tailwind.output.css'
import React,{useState} from 'react'
import avatar from './../assets/avatar.png'
import axios from 'axios'


function AddProfile() {

    const [fullname, setName] = useState('')
    const [bd, setBd] = useState('')
    const [contactno, setContactno] = useState('')
    const [address, setAddress] = useState('')
    const [about, setAbout] = useState('')
    const [Avatar, setAvatar] = useState(avatar)
    const [file, setFile] = useState(null)

    const inputHandler = async (e) =>{
        e.preventDefault()
        console.log('done');

        const newUser = new FormData();
        newUser.append("avatar", file)
        newUser.append("fullname", fullname)
        newUser.append("bd", bd)
        newUser.append("contactno", contactno)
        newUser.append("about", about)
        newUser.append("address", address)
        
        
           
        
        let r = await axios.post('http://localhost:7000/addprofile',newUser);
        console.log(r);
}
    return (
        <div >

         <h1 className="text-center text-2xl mt-5 font-bold ">Add A Profile </h1>
       <form className="min-w-min  shadow-lg mb-20 shadow-inner p-5 sm:w-1/2 md:w-1/2 lg:w-1/4 m-auto  rounded " method="POST"  encType="multipart/form-data">
           
            <hr className="mb-10"/>
            <div  className="m-auto rounded-full border-purple overflow-hidden flex justify-center w-32 h-32 mt-10 shadow-gray-lg">
                    <img src={Avatar} alt="logo" className="" />
                </div>
            <p className="m-2"> Picture : </p>
                <input type="file" name="avatar" className="text-black border-2  p-2 rounded-xl w-full bg-blue-100 outline-none font-semibold " onChange={(e) => { setAvatar(URL.createObjectURL(e.target.files[0])) ; setFile(e.target.files[0])}} />
            <p className="m-2"> Full Name  : </p>
                <input type="text" name="fullname" value={fullname} className="text-black border-2 p-2 rounded-xl w-full bg-blue-100 outline-none font-semibold " onChange={(e) => setName(e.target.value)} />

                <p className="m-2"> BirthDate : </p>
                <input type="date" name="bd" value={bd} className="text-black border-2 p-2 rounded-xl w-full bg-blue-100 outline-none font-semibold " onChange={(e) => setBd(e.target.value)} />

                <p className="m-2"> contact No : </p>
                <input type="number" name="contactno" value={contactno} className="text-black border-2 p-2 rounded-xl w-full bg-blue-100 outline-none font-semibold " onChange={(e) => setContactno(e.target.value)} />

                <p className="m-2"> address : </p>
                <textarea  type="text" name="address" value={address} className="text-black border-2 p-2 rounded-xl w-full bg-blue-100 outline-none font-semibold " onChange={(e) => setAddress(e.target.value)} />

                <p className="m-2"> About : </p>
                <textarea  type="text" name="about" value={about} className="text-black border-2 p-2 rounded-xl w-full bg-blue-100 outline-none font-semibold " onChange={(e) => setAbout(e.target.value)} />
               
               

              
                
                <button type="submit"  className="p-4 block m-auto mt-4 rounded-lg bg-blue-800 flex justify-center" onClick={inputHandler} >Submit</button>
       </form>

           
       </div>
    )
}

export default AddProfile;