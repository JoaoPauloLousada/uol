# Generate pdfs
```sh
pandoc OtoDecks_Report.md -o OtoDecks_Report.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=0.5in
```