import React from 'react'
import policyEvents from '../policyData';

type PolicyProps = {
    policy: keyof typeof policyEvents
}

const Policy: React.FC<PolicyProps> = ({policy}) => {
    const policyContent = policyEvents[policy] || policyEvents['General'];

    return (
        <>
            {policyContent}
        </>
    )
}

export default Policy;