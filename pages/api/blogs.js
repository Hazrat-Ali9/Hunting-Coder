import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // 1. Correct file path resolution
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/blog.json', 'utf8');
    
    
    // 2. Directly parse the JSON (no need for double stringify/parse)
    const data = JSON.parse(fileContents);
    
    // 3. Return the blogs array
    res.status(200).json(data.blogs);
  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).json({ error: 'Failed to read blog data' });
  }
}