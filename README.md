<p align="center">
<img src="media/ipp.png" width="340">
<br>
  <a href="https://travis-ci.org/CodeDotJS/instagram-profile-picture">
  <img src="https://travis-ci.org/CodeDotJS/instagram-profile-picture.svg?branch=master">
  </a>
</p>

> Get url to the profile picture of any instagram user in different resolutions


## Install

```
npm install --save instagram-profile-picture
```

## Usage

- __`Full size`__ `:` __`1080x1080 px`__
```js
const ipp = require('instagram-profile-picture');

ipp('9gag').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

- __`Regular size`__ `:` __`640x640 px`__
```js
ipp.regular('instagram').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

- __`Medium size`__ `:` __`320x320 px`__
```js
ipp.medium('9gag').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

- __`Small size`__ `:` __`150x150 px`__
```js
ipp.small('9gag').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

### Extra

Additionally, you can get downloadable link to the publically shared media __`(images/videos)`__

- __`Images`__
```js
ipp.image('https://www.instagram.com/p/BRfTRCQBeHw/').then(img => {
  console.log(img);
// => "https://instagram.fpat1-1.fna....9017349928908750848_n.jpg"
});
```

- __`Videos`__
```js
ipp.video('https://www.instagram.com/p/BTTuhDsgtCs/').then(vid => {
  console.log(vid);
  // => "https://instagram.fpat1-1.fn....9178079197241802752_n.mp4"
})
```

## Related

- [`Instavim`](https://github.com/CodeDotJS/instavim) : Download instagram media directly from command line.

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml);
