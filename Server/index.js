import express from 'express';

const app = express();
const port = 3000;
const PUBLISHABLE_KEY = 'pk_test_DLzU9mwQDCMvT6DebKsaiBxQ'
const SECRET_KEY = 'sk_test_51BZ3V5Cg0T1oVbY0PSmjyYAulvDEAFqngKCdDLH4Pal13yVxOn5HwIGJEwpKj3PMfjcckfHd4p7uxnqWrLvtuiT500fZTRTvA6'

app.listen(port, () => {
    console.log("Example app listening at http://localhost:${port}");
});