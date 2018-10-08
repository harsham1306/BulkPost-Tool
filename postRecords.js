const axios = require('axios');
const num = 2000;

function main() {
    postRecords();
}
const bearer = "Bearer ";
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImF1dGhfcWFfMjAxODA5MTcifQ.eyJzY29wZSI6ImFjY2Vzcy1jb250cm9sLnJlc291cmNlLXR5cGUuY3JuOmNhaTppbnZlbnRvcnltYW5hZ2VtZW50LnJlYWQgaW52ZW50b3J5LnJlYWQgaW52ZW50b3J5LndyaXRlIGRtcy52ZWguaW52ZW50b3J5LmNvc3RkaXNjbG9zdXJlLm1hbmFnZSBkbXMudmVoLmludmVudG9yeS5mb3Jtc2Rpc2Nsb3N1cmUubWFuYWdlIGRtcy52ZWguaW52ZW50b3J5LnNlcnZpY2VpbmZvcm1hdGlvbi5tYW5hZ2UgZG1zLnZlaC5pbnZlbnRvcnkubm90ZXMubWFuYWdlIGRtcy52ZWguaW52ZW50b3J5LmFjY291bnRpbmcubWFuYWdlIHRyYW5zbGF0aW9uLmRlYWxlci5yZWFkIHRyYW5zbGF0aW9uLnVzZXIucmVhZCB2ZWhpY2xlY2F0YWxvZy5yZWFkIiwiY2xpZW50X2lkIjoiNTFmYTg3MDMtYzNkMC00MGYwLThmZTgtOTI5OTMxM2EwMjNlIiwiaXNzIjoiaHR0cHM6Ly91YXQuYXV0aC5jb3hhdXRvaW5jLmNvbSIsImF1ZCI6Imh0dHBzOi8vdWF0LmFwaS5jb3hhdXRvaW5jLmNvbSIsImV4cCI6MTUzNzM4OTgyNX0.WjM9vDlmmxv1Z7HD3M8ykH12nk4h4RR4aqosqiq57X0TfMxLv8ECsEccQrFcyh9kFD7PVSyXajWf65sBrN6SUCj6GdLNIegEQgqUnfZM-kuszEeiHUwhM0YBTeYfodH48QAmQbkndtGZDut5W7PAMrl20qIQxO1FX0gMA3IY214q7J5s0etqwaj70LS-19aeptS4-7iZszbc3I_LmjhAQgBubDn-KM1jj4QXkC17TGUg4JHQkpRNssujmu3hfDZHmDn8hbpCII0AnfQ38yE3nahLYe24e0L4J3ES9xXk0ghr1lZ9ljwW-QhPXY5ud-lRusIUa05WYv-UylNNeO9gnA";

const postRecords = async () => {
    const started = process.hrtime();
    console.log("Started");
    for (let i = 0; i < num; i++) {
        console.log("Uploading ", i);
        let body = {

            inventoryId: i,
            saleAccount: "string",
            saleGroup: "string",
            inventoryAccount: "string",
            workInProcess: 0,
            isGlApplied: true
        };

        const response = await axios.post(`http://localhost:5000/api/v1/accountingdetails`, body, {
            headers: {
                "X-Entity-Id": "1",
                Authorization: `${bearer}${token}`
            }
        });
        console.log(response);
    }
    const ended = process.hrtime();
    const fullTime = ended[0] - started[0];
    console.log(fullTime);
}

main();
