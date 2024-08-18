//Using Try-Catch
/* 
const asyncHandler = (fn) => async (req, res, next)=> NOTE:fn is a higher order function
    {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message: err.message
            })
            
        }
    }
*/       

//Using Promises:
const asyncHandler = (requestHandler)=>
    {
        (req, res, next) =>
        {
            Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
        }
    }

export {asyncHandler}

//Higher order functions are basically functions that receive other functions as parameters or return functions.
