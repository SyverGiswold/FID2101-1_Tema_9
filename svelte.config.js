import adapter from '@sveltejs/adapter-vercel';
import dotenv from 'dotenv';

dotenv.config();

export default {
  kit: {
    adapter: adapter(),
    // other configurations
  }
};
