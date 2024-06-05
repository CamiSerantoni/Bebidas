import axios from "axios";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";


export async function getCategories() {
const url = 'http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  const  {data}  = await axios(url)
 console.log("DESDE RECIPES SERVICES")
 console.log(data)
}