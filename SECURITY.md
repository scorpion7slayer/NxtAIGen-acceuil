# Security Policy

This repository contains the source of [nxtaigen.com](https://nxtaigen.com/),
a static website written in plain HTML, CSS and JavaScript, with no runtime
dependencies.

## Supported Versions

Only the version currently deployed at https://nxtaigen.com/, built from the
`main` branch, is supported. Older commits are not patched.

## Reporting a Vulnerability

If you find a security issue, **do not open a public issue**.

Report it privately through
[GitHub's private vulnerability reporting](https://github.com/scorpion7slayer/NxtAIGen-acceuil/security/advisories/new),
or by email at **contact@nxtaigen.com**. Include:

- a clear description of the vulnerability;
- the affected URL or file;
- steps to reproduce;
- the potential impact;
- a suggested fix (optional).

You will receive a reply within **72 hours**. If the issue is confirmed, it
will be fixed and deployed as soon as possible, and you will be credited unless
you prefer to stay anonymous.

## Scope

Please report any issue on nxtaigen.com that could allow:

- cross-site scripting (XSS) or HTML injection;
- open redirects or links pointing to an unintended destination;
- tampering with the published files or the build output;
- loading untrusted third-party code.

## Out of Scope

- Vulnerabilities in the other NxtAIGen tools: report them in their own
  repositories ([BenchSift](https://github.com/scorpion7slayer/benchsift),
  [NxtUpdate](https://github.com/scorpion7slayer/NxtUpdate),
  [NxtGit](https://github.com/scorpion7slayer/NxtGit)).
- Issues in third-party services (Cloudflare, Google Fonts, Rybbit): report
  them to the vendor.
- Missing security headers without a demonstrated impact.
- Denial-of-service and automated scanner reports without a proof of concept.
