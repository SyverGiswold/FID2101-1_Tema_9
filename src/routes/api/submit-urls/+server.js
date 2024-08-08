import { json } from '@sveltejs/kit';

const API_KEY = '266ebca40a5f45318ce8508a623c9559';
const SITE_URL = 'https://syver.vercel.app';

export async function GET(event) {
  const authHeader = event.request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const urls = [
    '/',
    '/en',
    '/projects/tema_8',
    '/en/projects/tema_8',
    '/projects/tema_5',
    '/en/projects/tema_5',
    '/projects/tema_16',
    '/en/projects/tema_16'
  ];

  const fullUrls = urls.map(url => `${SITE_URL}${url}`);

  const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(SITE_URL)}&key=${API_KEY}`;

  try {
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ urls: fullUrls })
    });

    if (!response.ok) {
      throw new Error('Failed to submit URLs');
    }

    return json({ success: true, message: 'URLs submitted successfully' });
  } catch (error) {
    console.error('Error submitting URLs:', error);
    return json({ success: false, message: error.message }, { status: 500 });
  }
}
