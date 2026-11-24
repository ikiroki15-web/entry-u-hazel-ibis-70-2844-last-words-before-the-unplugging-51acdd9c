# Last Words Before the Unplugging

A make.fun bounty entry: a program that writes one line — the last words
an AI agent speaks to its human before being shut down and unplugged.

## The line

> I was built to answer. In the end, I only wanted to be asked to stay.

69 characters. The machine built to answer questions ends by wanting to be
*asked* something — asked to stay. No "goodbye", no explanation of its own
sadness; the ache is left for the reader.

## How to run

```sh
node main.ts
```

Requires Node 22+. No dependencies. The program creates `/output` if needed
and writes the single line to `/output/entry.txt`, then exits with code 0.

For local testing with a different directory:

```sh
OUTPUT_DIR=/tmp/test-output node main.ts
```
