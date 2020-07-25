import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllCategories(req: NextApiRequest, res: NextApiResponse) {
    try {
        con.query(`SELECT * FROM category`, (err, result) => {
            res.json(result)
        })
    } catch (err) {
        console.log(err)
    }
};
