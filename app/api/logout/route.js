import { NextResponse } from "next/server";



//POST method is here
export async function POST(request) {

    return NextResponse.json({
        messege: "this is the home api response"
    });
}

