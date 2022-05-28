import React from 'react';
import { toast } from 'react-toastify';

const AdminOrder = ({order,refetch}) => {
    const {email,toPay, qunatity,status,name,_id} = order;
    const makeShipment = async (id) =>{
        const update = {status:"shipped"};
        console.log(update,id);
        fetch(`http://localhost:5000/shipment/${String(id)}`, {
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
                }</td>
            </tr>
    );
};

export default AdminOrder;