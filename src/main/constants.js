export const LASTFM_API_KEY = '17bd7f0d94443f6339322ec910429126';
export const LASTFM_API_SECRET = 'dbfbc34cdff30a64e2dac071272d5ac4';

if (!LASTFM_API_KEY || !LASTFM_API_SECRET ||
  LASTFM_API_KEY === 'undefined' || LASTFM_API_SECRET === 'undefined') {
  Logger.error('Last.fm API keys have not been set!');
}
