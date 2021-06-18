import React from 'react';

export default function Timeline({timelineData, ...props}){
    return(
        <div className="flex container mx-auto">
            {timelineData.map((timeline, index) => (
                <></>
            ))}
        </div>
    )
}