# killmonger

Ibex script for the experiment code-named "Killmonger".

Brian Dillon <brian@linguist.umass.edu>         
Matt Wagers <mwagers@ucsc.edu>

## Preparing the materials for Ibex

For a .csv file with columns `itm`, `cond`, and `sentence`, the following works to convert those materials to json.

```
# Creates file targets.js which can be embedded in an Ibex data includes file

Rscript km2js.R
```

To repeat materials from a set without repeating identical conditions, two constraints:

-Item set *n* was duplicated as item set 64-*n*-1. Materials were sorted ascending 1-64.
-Condition labels in Item sets 1-32 were prefixed "A" and in 33-64, "B".


The Ibex shuffler first completed a block of A before B. This maximized distance between repeats and ensured that identical <item,condition> pairs didn't occur in the same list. 
