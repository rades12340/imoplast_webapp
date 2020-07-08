import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    con.query('select * from product inner join image where product.product_id = image.product_id', (err, result) => {
      res.json(JSON.stringify(result, null, 4))
    })
  } catch (err) {
    console.log(err)
  }

};
