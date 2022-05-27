#Basic

for x in range(0,51):
    print(x)

#Multipes of fives

for x in range(5, 1005, 5):
    print(x)

#Counting the Dojo Way 

for x in range(1,101):
    if x % 5 == 0 and x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)

#Whoa.That Suckers Huge

for x in range(0, 100):
    if x % 2 == 1:
        print(x)


#Countdown by fours
for x in range(2018, 0, -4):
    print(x)

#Flexible Counter

def flexibleCounter(lowNum, highNum, mult):
    for x in range(lowNum, highNum):
        if x % mult == 0:
            print(x)

            