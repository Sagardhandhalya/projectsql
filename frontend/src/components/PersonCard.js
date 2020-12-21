import React from 'react'

function PersonCard(props) {

   const {filename ,fullname , contactno , about , address , bd} = props.user
   
    return (
        <div>
            <div  className="m-auto roun-ded-full border-purple overflow-hidden flex justify-center w-32 h-32 mt-10 shadow-gray-lg">
                    <img src={`http://localhost:7000/uploads/${filename}`} alt="logo" className="" />
            </div>
        <p className="text-white mr-auto">{fullname}</p>
        <p className="text-white">{bd}</p>
        <p className="text-white">{contactno}</p>
        <p className="text-white">{about}</p>
        <p className="text-white">{address}</p>
        </div>
    );
}
export default PersonCard


