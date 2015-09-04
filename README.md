*Work in progress*  
*TODO: make it work better with firefox*

# Slide swiper
---
Plugin for [reveal.js](https://github.com/hakimel/reveal.js), swipe through your slides using your webcam.


## Usage
---

Just copy this repository into your reveal.js presentation to `/plugin/wave`.

In your index.html add:
```javascript
{ src: 'plugin/slide-swiper/webcam-swiper-0.1.js'},
{ src: 'plugin/slide-swiper/client.js'}
```

and add `slide-swiper.js` and `webcam-swiper-0.1.js` to the `/plugin/slide-swiper` repository.

Then `grunt serve` or whatever you normally use.  
Use the `w` key to activate/desactivate this plugin.


## Thanks
---

Inspired from the very similar: https://github.com/functino/reveal.js-wave-plugin  
Webcam-swiper library: https://github.com/iambrandonn/WebcamSwiper

## License
---

MIT
