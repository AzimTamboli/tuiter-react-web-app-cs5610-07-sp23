const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
        return (<h2 className={"wd-text-color-black"}>Welcome If Else</h2>);
    } else {
        return (<h2 className={"wd-text-color-black"}>Please login If Else</h2>);
    }
};
export default ConditionalOutputIfElse;