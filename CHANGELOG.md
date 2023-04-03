# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.0.8] - 2023-04-03

Some changes on the input and output numbers, and new functions available.

### Added:

- New function to calculate listeners based on bitrate, time and bandwidth.
- New function to calculate time based on bitrate, listeners and bandwidth.
- New function to calculate bitrate based on time, listeners and bandwidth.
- All the functions should be called through the `streaming` method. Eg: streaming.bandwidth(bitrate,listeners,time), streaming.listeners(bitrate,time,bandwidth)

### Changed
- The `bandwidthCalc` method still works through the compatibility mode.
- All inputs should be on the most basic unit (Bits and Bytes)
- The return will be always on the most basic unit (Bits and Bytes)

## [0.0.6] - 2023-03-30

Fixing the dependencies path to work with Node.js right after NPM install.

### Added:

- Properly exporting and importing the function `calculator` from `bytes=and-bits-converter`
- Fixing and improving README.md description.
- Made the Github repository public.

## [0.0.3] - 2023-03-27

Fixing the dependencies path to work with Node.js right after NPM install.

## [0.0.2] - 2023-03-24

Restructuring some files and folders.


## [0.0.1] - 2023-03-21

This is the first usable version, although it's not an official release.

### Added

- Added a front-end version, which uses the "js-script.js" file and "js-modules" folder with its subfolders.
- Added a back-end version, which uses the "node-modules.js" file and "node-modules" folder with subfolders.
- Added "index.html" and "YOUR-FRONTEND-CODE.js" as example of how to use the library on the front-end.
- Added "YOUR-NODE-CODE.js" as example of how to use the library on the back-end.