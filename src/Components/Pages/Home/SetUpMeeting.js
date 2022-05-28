import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SetUpMeeting = () => {
    const [user] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const today = new Date();
    const formattedDate = format(date, 'PP');
    
    const disabledDays = [
        { from: new Date(2022, today.getMonth(), 1), to: new Date(2022, today.getMonth(), today.getDate()-1) }
      ];
    
      const getMeeting = () =>{
        const meeting = {date:formattedDate};
        
        if(user){
            fetch('http://localhost:5000/meeting', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(meeting)
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Meeting is set at, ${formattedDate} Our Admin will Get back to You through Mail`)
                }
            })
        }
        else{
            toast.error('Please SignIn First')
        }
    }
    return (
        <div className="my-5">
        <div className="h-1/2 hero bg-[url('/src/Assets/bg.jpg')] ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="flex justify-center flex-col">
                    <p className="text-primary text-center m-10 text-3xl text-bold">
                        SetUp Meeting for {format(date, "PP")}
                    </p>
                    <button onClick={()=>getMeeting(date)} class="self-center btn btn-primary gap-2">
                        Button
                        <i class="fa-solid fa-comment-dots"></i>
                    </button>
                </div>
                <div className="mr-20">
                    <DayPicker
                        mode="single"
                        disabled={disabledDays}
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default SetUpMeeting;
