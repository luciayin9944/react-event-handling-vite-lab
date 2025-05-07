// Code PasswordInput Component Here
function handleChange() {
    console.log("Entering password...")

}
function PasswordInput() {
    return(
        <>
         <input 
            type="Password" placeholder="password" 
            onChange={handleChange}
         />
        </>
    );
}

export default PasswordInput;