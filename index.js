const app = require("express")();
app.get("/", (request, response) => {
    return response.send(`
        <br />
        <br />
        <center>
            <h1>
                Hello 👋 from AWS EC2
            </h1>
        </center>
    `);
});

app.listen(3013, () => console.log("Server running!!!"));
