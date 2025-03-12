import React from "react";
function UserCard({ name, email, age }){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500">{email}</p>
            <p className="text-gray-500">{age}</p>
        </div>
    );
}
export default UserCard;