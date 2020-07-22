import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";
import { getAsString } from "../../../getAsString";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = getAsString(req.query.id);
        con.query('select * from product inner join image on product.product_id = image.product_id where product.product_id = ?', [id], (err, result) => {
            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }

};
