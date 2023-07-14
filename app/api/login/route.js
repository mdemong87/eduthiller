import { NextResponse } from "next/server";



//POST method is here
export async function POST(request) {

    //districture the loagin palode
    const { phone, pass } = await request.json();



    // try catch block the there was a problem or not
    try {

        //match the login paload with the database stored data
        const dbphone = "019864049866";
        const dbpass = "12345";

        if (dbphone == phone && dbpass == pass) {

            //return the success response
            return NextResponse.json({
                success: true,
                messege: "login successfull"
            }, { status: 200 });
        }



    } catch (error) {
        //return the error response
        return NextResponse.json({
            success: false,
            messege: "There was a server side problem",
            error: error
        }, { status: 500 });
    }


}

