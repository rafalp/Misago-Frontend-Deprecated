===============
Misago Frontend
===============

This repository contains source for Misago frontend, written using React.js 16 and Bootstrap 4.

Ultimately this respository will contain source assets and build scripts, enabling those looking to develop custom theme for their site to simply fork this repo, edit its config and then happily hack around.

But until this stage of development is achieved, this repo will be iterated on aggressively and include some additional files (like work in progress Django templates) that will be moved on to main repo before release.

For issues tracker see the `Single Page Application <https://github.com/rafalp/Misago/milestone/22>`_ milestone on main repo.


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
