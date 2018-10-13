library(magrittr)
materials.tab <- read.csv("killmonger-combined-materials.csv")
outfile <- "targets.js"

x <- ' DS, {s: "'
y <- '"},Question,{q: "Please indicate your confidence",as: ["Very confident","Somewhat confident","Not confident"],randomOrder: false,presentHorizontally: false}],'

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


#[["ROCCandy-MisMatch",1], DS, {s:"At the meeting, Belinda greeted the assistants who the manager supervises."},Question,{q: 'Please indicate your confidence',as: ['Very confident','Somewhat confident','Not confident'],randomOrder: false,presentHorizontally: false}],
#[["ROCCandy-MatchUnGram",1], DS, {s:"At the meeting, Belinda greeted the assistant who the manager supervise."},Question,{q: 'Please indicate your confidence',as: ['Very confident','Somewhat confident','Not confident'],randomOrder: false,presentHorizontally: false}],

#[["ROCCandy-MisMatchUnGram",1], DS, {s:"At the meeting, Belinda greeted the assistants who the manager supervise."},Question,{q: 'Please indicate your confidence',as: ['Very confident','Somewhat confident','Not confident'],randomOrder: false,presentHorizontally: false}],
#[["ROCCandy-Match",1], DS, {s:"At the meeting, Belinda greeted the assistant who the manager supervises."},Question,{q: 'Please indicate your confidence',as: ['Very confident','Somewhat confident','Not confident'],randomOrder: false,presentHorizontally: false}],
