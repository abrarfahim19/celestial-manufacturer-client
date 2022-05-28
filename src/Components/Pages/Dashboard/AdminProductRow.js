import React from 'react';
import { toast } from 'react-toastify';

const AdminProductRow = ({product, refetch}) => {
    const {name,price,minQ,stock,img,_id} = product;
    const deleteOrder = (id) => {
        fetch(`https://celestial123.herokuapp.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${_id} is deleted.`)
                    refetch();
                }
            })
    }
    return (
        <tr>
                <td>
                <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img
                                src={img?`${img}`:"https://api.lorem.space/image/face?hash=33791"}
                                alt="product"
                            />
                        </div>
                    </div>
                </td>
                <th>{name}</th>
                <td>{price}</td>
                <td>{minQ}</td>
                <td>{stock}</td>
                <td> 
                <button onClick={()=>deleteOrder(_id)} class="btn btn-xs">Delete</button>
                </td>
            </tr>
    );
};

export default AdminProductRow;