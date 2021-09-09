import React, { useState } from "react";

const View = (props) => {
    const { data } = props;

    return (
        <>
            <div>
                {
                    data.map((item, i) => {
                        <p key={i}>{item.name}</p>
                    })
                }
            </div>
        </>
    );
}

export default View;