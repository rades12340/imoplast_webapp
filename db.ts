import con from "./connection";
import data from './data'

export default async function setup(

  // str: string, pars?: (string | number)[]
) {
  con.connect(function (err) {
    if (err) throw err;

    con.query(data, (err, result) => {
      if (err) throw err;
      console.log(result)
    })

  })
}


setup();
