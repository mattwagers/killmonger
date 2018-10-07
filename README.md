# killmonger

Ibex script for the experiment code-named "Killmonger".

Brian Dillon <brian@linguist.umass.edu>
Matt Wagers <mwagers@ucsc.edu>

# Preparing the materials

For a .csv file with columns `itm`, `cond`, and `sentence`, the following works to convert those materials to json.

```
# Creates file targets.js which can be embedded in an Ibex data includes file

Rscript km2js.R
```
