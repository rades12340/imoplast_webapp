import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../getAsString";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = query(req.query.id);
        con.query('SELECT * FROM product WHERE product_id = ?', [id], (err, result) => {
            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }

};
