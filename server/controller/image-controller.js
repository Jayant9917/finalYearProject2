//mongodb+srv://gaurajay1011:Fd8UWauCu6qtf2jD@cluster0.80cvj.mongodb.net/
import path from 'path';

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        // Convert to absolute path if it's not already
        const absolutePath = path.resolve(fileObj.path);
        const file = await File.create({
            ...fileObj,
            path: absolutePath
        });
        
        response.status(200).json({ 
            path: `mongodb+srv://gaurajay1011:Fd8UWauCu6qtf2jD@cluster0.80cvj.mongodb.net/upload/${file._id}`,
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

        // Use sendFile instead of download for more reliable file serving
        response.sendFile(file.path, { 
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${file.name}"`
            }
        }, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                response.status(500).send('Error downloading file');
            }
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}