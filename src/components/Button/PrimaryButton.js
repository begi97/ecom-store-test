import React from 'react'

export const PrimaryButton = ({text_content}) => {
    return (
        <div>
            <button className="btn btn-primary">
                {text_content}
            </button>
        </div>
    )
}
