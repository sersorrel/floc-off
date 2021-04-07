# FLoC Off!

Blocks Chrome's new FLoC (Federated Learning of Cohorts) feature.

## Background

Google is experimenting with a new browser feature called Federated
Learning of Cohorts, or FLoC. In short, this feature requires your
browser to use your browsing history to place you into one of several
thousand "cohorts"; it will then tell any page that asks which cohort
you are in, revealing information about what kinds of websites you tend
to visit.

The EFF has [written][eff] about why this is a bad idea.

Allegedly, Google plans to add the ability for users to opt out of FLoC,
but right now, the only way to do so is by disabling third-party cookies
and potentially breaking existing websites. This extension provides an
alternative: all websites will be automatically blocked from discovering
your FLoC cohort.

[eff]: https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea

## Usage

1. Install the extension from the Chrome Web Store.
2. You're done! When a page requests your FLoC cohort, a red badge will
   appear on the extension icon, and the request will be blocked. You
   can test this at https://floc.glitch.me.

## Bugs

Probably! If you spot any, I'd be grateful if you could report them.

## Contributing

Please do!

Note that this extension includes a modified icon from [Font Awesome
Pro][fa], `images/icon-dark.svg`, which I'm not allowed to distribute in
source form. There is a similar icon from Font Awesome Free at
`images/icon-free.svg`, which you can rename and use instead.

[fa]: https://fontawesome.com/

## Copyright

Copyright © 2021 Ash Holland. Licensed under the EUPL (1.2 or later).
