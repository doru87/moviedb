import React from 'react'

export const ModalPlayer = (props) => {

    const outerStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        zIndex: 1,
        backgroundColor: "#626262",
        backgroundColor: "rgba(98, 98, 98, 0.4)",
    };

    const style = {
        modal: {
            position: "relative",
            width: 700,
            height:400,
            padding: 20,
            boxSizing: "border-box",
            backgroundColor: "#0a0a0a",
            margin: "50px auto",
            borderRadius: 3,
            zIndex: 2,
            textAlign: "left",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            opacity:1,
        },
        button: {
            boxShadow:"inset 0px 1px 3px 0px #91b8b3",
            backgroundColor:"#768d87",
            borderRadius:5,
            border:"1px solid #566963",
            display:"inline-block",
            cursor:"pointer",
            color:"#ffffff",
            fontFamily:"Arial",
            fontSize:15,
            fontWeight:"bold",
            padding:"8px 23px",
            textDecoration:"none",
            textShadow:"0px -1px 0px #2b665e",
            marginTop:20,
            float:"right",
        }
    }
    return (
        <div style = {{...outerStyle,display: props.isModalOpen ? "block" : "none"}}>
            <div style={style.modal}>
                <div className="iframeWrapper">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/` + props.video}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <button style={style.button} onClick={props.closedModal}>Inchide</button>
                </div>
            </div>
        </div>
    )
}
