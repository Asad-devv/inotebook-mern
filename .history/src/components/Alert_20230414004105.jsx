import React from 'react'

export const Alert = ({}) => {
    return (
        <div>
            <div class="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}