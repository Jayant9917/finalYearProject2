


 export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj);
        // Return a direct download URL
        response.status(200).json({ 
            path: `mongodb+srv://gaurajay1011:Fd8UWauCu6qtf2jD@cluster0.80cvj.mongodb.net/download/${file._id}`,
            filename: file.name
        });
        
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        file.downloadCount++;
        await file.save();

        // Set headers to force download
        response.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);
        response.setHeader('Content-Type', 'application/octet-stream');

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}