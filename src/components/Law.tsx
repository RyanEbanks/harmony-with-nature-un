import React from 'react'
import events from '../lawData';

type LawProps = {
    law: keyof typeof events
}

const Law: React.FC<LawProps> = ({law}) => {
    return (
        <>
            {events[law]}
        </>
    )
}

export default Law;
            

         