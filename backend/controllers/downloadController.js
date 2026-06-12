export const getDownloadLink =
(req,res)=>{

    const { fileKey } =
    req.params;

    res.json({

        url:fileKey

    });

};