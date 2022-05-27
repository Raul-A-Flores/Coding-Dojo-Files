x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#Changing value from 10 to 15
x[1][0] = 15
print(x)

# Changing value from list containing dictionary 

students[0]['last_name'] = 'Bryant'
print(students)

#Changing value from dictionary containing a list

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

#Changing value from a dictionary within a list 

z[0]['x'] = 30
print(z)



students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

#Creating a fucntion to iterate though 

def iterateDictionary(some_list):
    for k in some_list:
        print(k)

print(iterateDictionary(students))


#Getting Values

def iterateDictionary2(key_name, some_list):
    for i in some_list:
        print(i[key_name])

print(iterateDictionary2('first_name', students))


#Iterating through a dictionary with list values

def printInfo(some_dict):
    print((len(some_dict[key]), key , (some_dict[key])))

print(printInfo(students))