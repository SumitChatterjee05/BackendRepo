//All the errors that we get will be in this format.
//We override various parameters.

class apierrot extends Error
{
    constructor(statusCode, message="Something went wrong", error= [], stack ="")
    {
        //this is to override
        super(message) 
        this.statusCode= statusCode
        this.data= null
        this.message=message
        this.success= false;
        this.errors= errors

        //below this is note necessary.
        if(stack)
        {
            this.stack= stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
        //upto this is not necessary.
    }
}

export default apierrot