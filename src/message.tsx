function Message() {
    const name = "anwesha";
    if (name)
        return <h1>hello {name}</h1>;
    else
        return <h1>string is absent</h1>
}

export default Message;