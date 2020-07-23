import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const category = req.query.kategorija;
    con.query(`SELECT * 
    FROM product p
    LEFT JOIN image i
    ON p.product_id = i.product_id
    JOIN category c
    ON p.category_id = c.category_id where ( c.category_name is null or c.category_name = ?)`, [category], (err, result) => {
      res.json(result)
    })

  } catch (err) {
    console.log(err)
  }
};
