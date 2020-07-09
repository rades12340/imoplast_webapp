import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(process.env)
    con.query('select * from product inner join image where product.product_id = image.product_id', (err, result) => {
      res.json(result)
    })

  } catch (err) {
    console.log(err)
  }
};
