===============
Misago Frontend
===============


.. image:: https://travis-ci.org/rafalp/Misago-Frontend.svg?branch=master
   :target: https://travis-ci.org/rafalp/Misago-Frontend
   :alt: Tests Result

**Development Status:** ⚠️*DEPRECATED*⚠️


This repository contains source code for abadoned effort to rewrite Misago frontend using React.js 16, Bootstrap 4 and Flow.js, that I was working on in late 2017. As I've worked on this repo, it eventually became apparent to me that plan of just rewriting bunch of Misago and then piecing it together with new frontend was mistake that would endanger my ability to ship new releases in meantime.

Today my plan for new Misago frontend is to have transition period during which Misago will support both old and new Frontends, old and new features existing side by side in the codebase, and just removing old frontend's code when new frontend is ready to ship.


Development
===========

This package comes with following scripts that are of interest for developers:

- ``build``: runs optimised build for sass and js files
- ``watch``: runs unoptimised build for sass and js files and watches files for changes
- ``test``: runs tests suite
- ``test-watch``: runs tests in watch mode

After cloning this repo locally and installing deps via ``yarn install``, you also need to setup local Misago forum somewhere, preferably using code form latest `master` as its only one that implements changes required by new frontend to run.

After you have your local Misago instalation setup, edit your ``settings.py`` and add path to this repo's ``dist`` directory in your ``STATICFILES_DIRS`` so they are served instead of Misago's default files, and then add path to this repo's ``templates`` in ``TEMPLATES['DIRS']`` setting. 


Authors
=======

**Rafał Pitoń**

* http://rpiton.com
* http://github.com/rafalp
* https://twitter.com/RafalPiton


Copyright and license
=====================

**Misago** - Copyright © 2017 `Rafał Pitoń <http://github.com/ralfp>`_
This program comes with ABSOLUTELY NO WARRANTY.

This is free software and you are welcome to modify and redistribute it under the conditions described in the license.
For the complete license, refer to LICENSE.rst
