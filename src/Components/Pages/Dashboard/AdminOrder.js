import React from 'react';
import { toast } from 'react-toastify';

const AdminOrder = ({order,refetch}) => {
    const {email,toPay, qunatity,status,name,_id} = order;
    
    const makeShipment = async (id) =>{
        const update = {status:"shipped"};
        console.log(update,id);
        fetch(`https://celestial123.herokuapp.com/shipment/${String(id)}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(update),
        })
        .then((res) => res.json())
        .then(d => {
            console.log(d)
            toast('Shipment is on the Process!')
            refetch();
        })
    }

    const deleteOrder = async (id) =>{
        fetch(`https://celestial123.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order: ${_id} is deleted.`)
                    refetch();
                }
            })
    }

    return (
        <tr>
                <th>{name}</th>
                <td>{email}</td>
                <td>{qunatity}</td>
                <td>{toPay}</td>
                <td>{status}</td>
                <td>{status==="paid" && 
                <>
                    <button onClick={()=>makeShipment(_id)} class="btn btn-xs">Ship</button>
                </>
                }
                {status==="pending" && 
                <>
                    <button onClick={()=>deleteOrder(_id)} class="btn btn-xs">Delete</button>
                </>
                }
                </td>
            </tr>
    );
};

export default AdminOrder;