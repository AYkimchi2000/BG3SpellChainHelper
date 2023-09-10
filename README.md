# BG3-spellchain-helper

Have you notice many weapon actions grant conditions, and conditions makes enemy have disadvantage on certain saving throws? 

Well, this is an attempt to make chaining spells easier in Baldurs' gate 3 because chaining **weapon actions** and **spells** make battle feel more dynamic and cooperative. 

Current direction:

There is the ambition that this could be made into one stop solves all spellcasting and condition chaining complication tool, however the code would get pretty complicated(for my tiny brain) if you put spell concentration, terrain spells' unique condition mechanic, BG3's current incoherent spell descriptions... all that into consideration. So, baby steps!

Goals:
1v.Create a weapon action and spell database with accurate attributes.
2v.Search spell by save 
3.Search spell display sorted dropdown
4.Algorithm
5.Multiple condition combos that makes concentration control spells potentially last longer
6.Duration

*1
**Concentration spell chaining** (irrelevant to the helper atm)
curiously, <u>terrain concentration spell granted conditions</u> behave differently from normal <u>concentration spell granted conditions</u>

	1.terrain > normconcspell = condition last full duration, can chain multiple spells
	2. normconcspell > normconcspell = condition last for 
  
