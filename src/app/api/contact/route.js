import dbConnect from "../../../utils/dbConnect";
import Contact from "../../../models/contact";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try {
        const body = await req.json()
        await dbConnect()
        await Contact.create(body)
        return NextResponse.json(
            {
            message:'Message sent Successfully'
        },
    {
        status:200
    }
    )
    } catch (error) {
return NextResponse.json(
    {
        message:'Server Error, Try Again'
    },
{
    status:500
}
)

}
}