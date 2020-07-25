import con from "../../../../connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const category = req.query.kategorija;

    if (category !== 'Svi proizvodi') {
      con.query(`SELECT p.product_id, p.name, p.description, i.image_src 
      FROM product p
      LEFT JOIN image i
      ON p.product_id = i.product_id
      JOIN category c
      ON p.category_id = c.category_id WHERE  c.category_name = ?`, [category], (err, result) => {
        res.json(result)
      })
    } else {
      con.query(`SELECT p.product_id, p.name, p.description, i.image_src 
      FROM product p
      LEFT JOIN image i
      ON p.product_id = i.product_id
      JOIN category c
      ON p.category_id = c.category_id`, (err, result) => {
        res.json(result)
      })
    }
  } catch (err) {
    console.log(err)
  }
};
