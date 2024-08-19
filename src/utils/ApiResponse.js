class ApiResponse
{
    constructor(statuscode, data, message="success")
    {
        this.statuscode=statuscode;
        this.data= data;
        this.message= message;
        this.success= statuscode < 400
    }
}

export {ApiResponse}

//Servers have status code which should always be <400. There are various types of responses or messages each having their status code. Read ther MDN Documentation.