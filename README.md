# @root/pem

Lightweight, Zero-Dependency PEM encoder and decoder.

| ~300b gzipped
| ~650b minified
| ~1k full
|

-   [x] VanillaJS
-   [x] Zero-Dependency
-   [x] Universal Support
    -   [x] Node.js
    -   [x] Browsers

# Support

This library supports PEM, which is pretty boring on its own.

Most likely you are also interested in some of the following:

-   [keypairs.js](https://git.rootprojects.org/root/keypairs.js)
    -   RSA
    -   EC / ECDSA
-   [x509.js](https://git.rootprojects.org/root/x509.js)
-   [asn1.js](https://git.rootprojects.org/root/asn1.js)

# Usage

-   PEM.parseBlock(str)
-   PEM.packBlock(options)

Parsing

```js
var PEM = require('@root/pem/parser');

var block = PEM.parseBlock(
	'-----BEGIN Type-----\nSGVsbG8sIOS4lueVjCE=\n-----END Type-----\n'
);
```

```js
{
	bytes: `<48 65 6c 6c 6f 2c 20 e4 b8 96 e7 95 8c 21>`;
}
```

Packing

```js
var PEM = require('@root/pem/packer');

var block = PEM.packBlock({
  type: 'Type',
  // Buffer or Uint8Array or Array
  bytes: [0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0xe4, 0xb8, 0x96, 0xe7, 0x95, 0x8c, 0x21]
);
```

```txt
-----BEGIN Type-----
SGVsbG8sIOS4lueVjCE=
-----END Type-----
```

# Install

## Node / Webpack

```js
npm install -g @root/pem
```

## Browsers

```html
<script src="https://unpkg.com/@root/pem/dist/pem.all.js"></script>
```

```html
<script src="https://unpkg.com/@root/pem/dist/pem.all.min.js"></script>
```

# A PEM Block

A Block represents a PEM encoded structure.

The encoded form is:

```txt
-----BEGIN Type-----
Headers
base64-encoded Bytes
-----END Type-----
```

where Headers is a possibly empty sequence of Key: Value lines.

(credit: https://golang.org/pkg/encoding/pem/)

# PEM History

PEM was introduced in 1993 via RFC 1421, but not formally
standardized until RFC 7468 in April of 2015.

It has served as the _de facto_ standard for a variety of
DER-encoded X509 schemas of ASN.1 data for cryptographic
keys and certificates such as:

-   [x] PKCS#10 (Certificate Signing Request [CSR])
-   [x] X509 Certificate (fullchain.pem, site.crt)
-   [x] PKIX (cert.pem, privkey.pem, priv.key)
    -   [x] PKCS#1 (RSA Public and Private Keys)
    -   [x] PKCS#8 (RSA and ECDSA Keypairs)
-   [x] SEC#1 (ECDSARSA Public and Private Keys)

# Legal

MPL-2.0 |
[Terms of Use](https://therootcompany.com/legal/#terms) |
[Privacy Policy](https://therootcompany.com/legal/#privacy)
