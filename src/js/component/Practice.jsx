import React, { useState } from "react";

export const Practice = () => {

   

    const [member, setMember] = useState("");
    const [memberList, setMemberList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (member.trim() !=="") {setMemberList([...memberList, member])
            setMember("")}
        
        setMember("")
    }

    const deleteMember = (item)=> {
        setMemberList(memberList.filter((element) => element!==item))
    }



return (
    <div className="container col-4 text-center">
        <h1>Familia</h1>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add Member"
                    value={member}
                    onChange={(event) => setMember(event.target.value)}
                />
            </div>
        </form>

        <ul className="list-group">
            
            {memberList.map((element) =>
                <li className="list-group-item d-flex justify-content-between">
                    {element}
                    <span onClick={()=>{deleteMember(element)}}><i className="fas fa-trash"></i></span>
                </li>
                
            )}
        </ul>
        
    </div>
);
};