// Code SubmitButton Component Here

function handleEnter() {
    console.log("Mouse Entering")
}

function handleLeft() {
    console.log("Mouse Exiting")
}

function SubmitButton (){
    return(
        <>
         <button onMouseEnter={handleEnter} onMouseLeave={handleLeft}>Submit Password</button>
        </>
    )
}

export default SubmitButton;