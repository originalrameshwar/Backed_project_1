import express from 'express';
const router = express.Router();


router.get("/users", (req, res) => {
    res.send("<h>Hi friends</h>");
});

export default router;
