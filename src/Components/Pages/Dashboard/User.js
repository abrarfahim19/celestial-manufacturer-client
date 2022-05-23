import React from "react";

const User = ({user}) => {
    const {name,email,company,jobRole,image,location} = user;
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
                <button class="btn btn-ghost btn-xs">Make Admin</button>
            </th>
        </tr>
    );
};

export default User;
