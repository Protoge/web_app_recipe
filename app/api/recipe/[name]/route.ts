import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req:Request,{params}:{params:{name:string}}){
    try{
        const res = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${params.name}`, {
            headers:{
                'X-Api-Key': process.env.API_KEY
            }
        })

        return NextResponse.json(res.data,{status:200})
    }catch(error){
        return new NextResponse("ERROR",{status:404})
    }
}


