# Things TODO

#### Revisit how API calls are handled

Might not need SuperAgent. Look into Fluxible's Fetchr as an alternative.

#### PropTypes

Makes sure all components are properly validating/requiring props.

#### API Changes

- Add palettes to `/releases.json`

To be used when listing out all releases. Will be nice for creating a mood page, possibly selecting music by color instead of image/name

- Serve up more cover sizes for releases in `/releases.json` and also `/releases/AH***.json`

Will be helpful for delivering images optimized for the sizes they will be primarily viewed in. For example a tiny 50x50 thumbnail to be displayed in the thumbnail will be better than using a 300x300 image. Also, we'll be able to swap out image `src`s for lower res on mobile/tablet.

Needed sizes:

- TBD

