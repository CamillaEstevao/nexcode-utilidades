import { seedProducts } from './data'
const KEY='nexcode_products_master_v3'
const FAV='nexcode_favorites_v1'
export function getProducts(){
  try{
    const stored=JSON.parse(localStorage.getItem(KEY)||'[]')
    const byId=new Map(stored.map(p=>[p.id,p]))
    const merged=seedProducts.map(seed=>byId.has(seed.id)?{...seed,...byId.get(seed.id),images:seed.images,description:seed.description,shopeeUrl:seed.shopeeUrl}:seed)
    const extras=stored.filter(p=>!seedProducts.some(s=>s.id===p.id))
    const all=[...merged,...extras]
    localStorage.setItem(KEY,JSON.stringify(all))
    return all
  }catch{return seedProducts}
}
export function saveProducts(products){localStorage.setItem(KEY,JSON.stringify(products))}
export function money(v){return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
export function getFavorites(){try{return JSON.parse(localStorage.getItem(FAV)||'[]')}catch{return []}}
export function toggleFavorite(id){const f=getFavorites();const n=f.includes(id)?f.filter(x=>x!==id):[...f,id];localStorage.setItem(FAV,JSON.stringify(n));return n}
