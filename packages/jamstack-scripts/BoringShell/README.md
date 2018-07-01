# hello

this folder contains code prototyped in <https://github.com/sw-yx/boring-ssg>. it is (ideally) a self contained thing that takes your app's index.js and produces both a bundle and a bunch of static pages to your `dist` folder.

the reason i am treating this folder with such care is because the babel v7 in node story is poorly documented and frankly didn't work well for me. so after wasting many hours on trying to get babel v7 to work in node on the fly i decided to just go with a straight babel process and named it very clearly `prebabel` and `postbabel` instead of the usual more obtuse `src` and `lib`.
