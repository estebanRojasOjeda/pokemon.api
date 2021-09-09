import React from "react";

const View = (props) => {
    const { data } = props;

    return (
        <>
            <div>
                {
                    data.length > 0 && data.map((el, i) => {
                        return (<p key={i}>{i + 1} - {el.name}</p>)
                    })
                }
            </div>
        </>
    );
}

export default View;