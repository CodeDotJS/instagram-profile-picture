import test from 'ava';
import fn from './';

test('full', async t => {
	const ipp = await fn('iama_rishi');

	t.is(ipp, 'https://scontent-lga3-1.cdninstagram.com/19440301fb5b335423628339609b6896/5B395F35/t51.2885-19/s1080x1080/28766707_802539189946973_8583808796109832192_n.jpg');
});

test('medium', async t => {
	const med = await fn.medium('iama_rishi');

	t.is(med, 'https://scontent-iad3-1.cdninstagram.com/vp/19440301fb5b335423628339609b6896/5B395F35/t51.2885-19/s320x320/28766707_802539189946973_8583808796109832192_n.jpg');
});

test('small', async t => {
	const sm = await fn.small('iama_rishi');

	t.is(sm, 'https://scontent-iad3-1.cdninstagram.com/vp/3d1cf3d9f9504bf031c1056878b20412/5B4EA3C5/t51.2885-19/s150x150/28766707_802539189946973_8583808796109832192_n.jpg');
});

test('image', async t => {
	const img = await fn.image('https://www.instagram.com/p/BRfTRCQBeHw/');

	t.is(img, 'https://scontent-iad3-1.cdninstagram.com/vp/7656198f907d4463bd258511d8905d3d/5B38B5B2/t51.2885-15/e35/17265889_1909059605990282_9017349928908750848_n.jpg');
});

test('video', async t => {
	const vid = await fn.video('https://www.instagram.com/p/BTTuhDsgtCs/');

	t.is(vid, 'https://scontent-iad3-1.cdninstagram.com/vp/ce165cb680827bea41f2b4d5783e6c41/5AB39926/t50.2886-16/18190450_471341926537056_7672813376128417792_n.mp4');
});
