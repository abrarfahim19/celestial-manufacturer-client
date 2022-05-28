import React from "react";

const UserOrder = ({order,refetch,setPaydata}) => {
    const {email,toPay, qunatity,status,name,_id} = order;
    const makePayment = () =>{
        setPaydata(order);
    }
    return (
            <tr>
                <th>{name}</th>
                <td>{email}</td>
                <td>{qunatity}</td>
                <td>{toPay}</td>
                <td>{status}</td>
                <td>{status==="pending" && 
                <>
                    <label htmlFor="pay-modal" onClick={()=> setPaydata(order)} class="btn btn-xs">Pay</label>
                </>
                }</td>
            </tr>
    );
};

export default UserOrder;
