import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
    return (
        <div>Meeting room id {params.id}</div>
    )
}

export default Meeting