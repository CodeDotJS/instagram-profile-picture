import test from 'ava';
import fn from './';

test('full', async t => {
	const ipp = await fn('iama_rishi');

	t.is(ipp, 'https://instagram.fpat1-1.fna.fbcdn.net/t51.2885-19/17125602_1383250351733245_2023684664551538688_a.jpg');
});

test('medium', async t => {
	const med = await fn.medium('iama_rishi');

	t.is(med, 'https://instagram.fpat1-1.fna.fbcdn.net/t51.2885-19/s320x320/17125602_1383250351733245_2023684664551538688_a.jpg');
});

test('small', async t => {
	const sm = await fn.small('iama_rishi');

	t.is(sm, 'https://instagram.fpat1-1.fna.fbcdn.net/t51.2885-19/s150x150/17125602_1383250351733245_2023684664551538688_a.jpg');
});

test('image', async t => {
	const img = await fn.image('https://www.instagram.com/p/BRfTRCQBeHw/');

	t.is(img, 'https://instagram.fpat1-1.fna.fbcdn.net/t51.2885-15/e35/17265889_1909059605990282_9017349928908750848_n.jpg');
});

test('video', async t => {
	const vid = await fn.video('https://www.instagram.com/p/BTTuhDsgtCs/');

	t.is(vid, 'https://instagram.fpat1-1.fna.fbcdn.net/t50.2886-16/18190450_471341926537056_7672813376128417792_n.mp4');
});
