import test from 'ava';
import fn from './';

test('full', async t => {
	const ipp = await fn('iama_rishi');

	t.is(ipp, 'https://scontent-atl3-1.cdninstagram.com/vp/cb21b91f00b3971ca9c7b5f4f11c26e3/5B50A9F0/t51.2885-19/30589937_859363860938724_791137326725070848_n.jpg');
});

test('medium', async t => {
	const med = await fn.medium('iama_rishi');

	t.is(med, 'https://scontent-iad3-1.cdninstagram.com/vp/6ec119cbe72cb98e6a62e620ca3b77eb/5B740135/t51.2885-19/s320x320/29090932_588149134878706_555805880914804736_n.jpg');
});

test('small', async t => {
	const sm = await fn.small('iama_rishi');

	t.is(sm, 'https://scontent-atl3-1.cdninstagram.com/vp/67eacbe0f312f272ec8d9c232e4a0ae6/5B734644/t51.2885-19/s150x150/30589937_859363860938724_791137326725070848_n.jpg');
});

test('image', async t => {
	const img = await fn.image('https://www.instagram.com/p/BRfTRCQBeHw/');

	t.is(img, 'https://scontent-atl3-1.cdninstagram.com/vp/1766f29af7b73e8f1bc2acbc2732525a/5B6042B2/t51.2885-15/e35/17265889_1909059605990282_9017349928908750848_n.jpg');
});

test('video', async t => {
	const vid = await fn.video('https://www.instagram.com/p/BTTuhDsgtCs/');

	t.is(vid, 'https://scontent-iad3-1.cdninstagram.com/vp/3583c44bc514f37583aeefeab70707a3/5AC0C826/t50.2886-16/18190450_471341926537056_7672813376128417792_n.mp4');
});
