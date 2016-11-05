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

- `Profile Picture` __`:`__ `Full resolution`

```js
const ipp = require('instagram-profile-picture');

ipp('9gag').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

- `Profile Picture` __`:`__ `Medium resolution`

```js
ipp.medium('9gag').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

- `Profile Picture` __`:`__ `Low resolution`

```js
ipp.small('9gag').then(user => {
  console.log(user);
  // => https://scontent-sit4-1.cdninstagram.com/7...jpg
});
```

## Related

- [`Instavim`](https://github.com/CodeDotJS/instavim) : Download instagram media directly from command line.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com);
