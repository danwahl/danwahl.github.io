# Identity Keys

This page lists cryptographic keys associated with Dan Wahl (danwahl.net).
The canonical source for these keys is the [danwahl.github.io repository](https://github.com/danwahl/danwahl.github.io).

## Active

### danwahl-20260423

- **Algorithm:** Ed25519
- **Created:** 2026-04-23
- **Purpose:** Identity verification, signing mandates and attestations
- **Public key:** [/.well-known/keys/danwahl-20260423.pub](/.well-known/keys/danwahl-20260423.pub)
- **Fingerprint:** `SHA256:PASTE_YOUR_FINGERPRINT_HERE`

## Retired

*(none yet)*

## Revoked

*(none yet)*

## Verifying a signature

To verify a signature from any of the above keys:

1. Fetch the public key from the URL above.
2. Create an `allowed_signers` file: `danwahl-20260423 <contents of .pub file>`
3. Run: `ssh-keygen -Y verify -n <namespace> -I danwahl-20260423 -f allowed_signers -s <signature_file> < <signed_content>`

The `<namespace>` will be specified alongside any signed artifact.
