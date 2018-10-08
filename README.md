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

Two numbering and sorting constraints ensure that that materials are repeated 2x from an item set, without repeating identical conditions:

-Item set *n* was duplicated as item set 63-*n*. E.g., item set 2 became duplicated as item set 61. Materials were sorted ascending 1-64. Duplicating, reversing and sorting ensure that the same token won't be chosen twice from a given item set.
-Condition labels in Item sets 1-32 were prefixed "A" and in 33-64, "B". The Ibex shuffler first completed a randomized block of A items (1-32) before B (33-64). This maximizes distance between item-set repeats. 
