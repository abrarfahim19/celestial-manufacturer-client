import React from "react";
import { toast } from 'react-toastify';

const User = ({user,refetch}) => {
    const {name,email,company,jobRole,image,location,role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('System Error');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made ${email} admin`);
            }
        })
    }
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img
                                src={image?`${image}`:"https://api.lorem.space/image/face?hash=33791"}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name? `${name}`:'N/A'}</div>
                        <div class="text-sm opacity-50">{location ? `${location}`:'N/A'}</div>
                    </div>
                </div>
            </td>
            <td>
                {company ? `${company}`:'N/A'}
                <br />
                <span class="badge badge-ghost badge-sm">
                    {jobRole ? `${jobRole}`:'N/A'}
                </span>
            </td>
            <td>{email ? `${email}`:'N/A'}</td>
            <th>
                {role==='admin'? <button onClick={()=> {toast('Already An Admin')}} class="btn btn-sm btn-success">Admin</button>:<button onClick={makeAdmin} class="btn btn-sm bg-blue-500 text-black border-0">Make Admin</button>}
            </th>
        </tr>
    );
};

export default User;
