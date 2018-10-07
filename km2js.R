library(magrittr)
materials.tab <- read.csv("killmonger-combined-materials.csv")
outfile <- "targets.js"

x <- ' "FlashSentence", {s: "+"}, "DashedSentence", {s: "'
y <- '"}, "QuestionExpanded", {q: "Acceptable?"}, "Question", {q: "How confident are you?"}],'

createJsString <- function(itm,cnd,sentence){
  paste('[["',cnd,'",',itm,'],', sep="") %>%
    paste(., x, sentence, y, sep="") %>%
    return
}

write(file=outfile, x='//Experimental Items')

lines <- nrow(materials.tab)

for(l in 1:lines){
  createJsString(materials.tab[l,"Itm"],
                 materials.tab[l,"Cnd"],
                 materials.tab[l,"Sentence"]) %>%
    write(file=outfile, x=., append=TRUE)
}
