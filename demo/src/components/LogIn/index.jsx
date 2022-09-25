const UserGreeting = (props) => {
    return (
        <>
        <h1>Welcome</h1>
        <span>{props.note}</span>
        </>
    )
}
const GuestGreeting = (props) => {
    return (
        <>
        <h1>Please sign up</h1>
        <span>{props.note}</span>
        </>
    )
}
    
        
export const LogIn = (props) => {
    const IsLogin = props.IsLogin;
    if (IsLogin) {
      return  <UserGreeting/>
        
    }
    return <GuestGreeting/>
}