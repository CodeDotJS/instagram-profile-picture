import test from 'ava';
import fn from './';

test('full', async t => {
	const ipp = await fn('iama_rishi');

	t.is(ipp, 'https://scontent-atl3-1.cdninstagram.com/vp/cb21b91f00b3971ca9c7b5f4f11c26e3/5B50A9F0/t51.2885-19/30589937_859363860938724_791137326725070848_n.jpg');
});

