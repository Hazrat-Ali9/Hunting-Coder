import path from 'path';
import { promises as fs } from 'fs';

export async function getBlogData() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, 'blog.json'),
      'utf8'
    );
    const data = JSON.parse(fileContents);
    return data;
  } catch (error) {
    console.error('Error loading blogs:', error);
    return { blogs: [] };
  }
}