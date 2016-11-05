import test from 'ava';
import fn from './';

test('full', async t => {
	const ipp = await fn('iama_rishi');

	t.is(ipp, 'https://scontent.cdninstagram.com/t51.2885-19/14540650_1804041593171098_2714145737360277504_a.jpg');
});

test('medium', async t => {
	const med = await fn.medium('iama_rishi');

	t.is(med, 'https://scontent.cdninstagram.com/t51.2885-19/s320x320/14540650_1804041593171098_2714145737360277504_a.jpg');
});

test('small', async t => {
	const sm = await fn.small('iama_rishi');

	t.is(sm, 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14540650_1804041593171098_2714145737360277504_a.jpg');
});
