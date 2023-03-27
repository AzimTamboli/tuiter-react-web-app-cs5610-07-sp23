const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            { loggedIn && <h2 className={"wd-text-color-black"}>Welcome Inline</h2>}
            {!loggedIn && <h2 className={"wd-text-color-black"}>Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;